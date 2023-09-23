// 사용자와 상호작용을 하는 컴포넌트 => Client Component

"use client";

// next/router => Next.js 12버전에서 사용하는 페이지 라우터라고 하는 방식에서 사용되는 라우터.
// 지금 우리가 쓰고 있는 방식의 라우팅에서는 useRouter를 navigation에서 가져와야 함.
// 두 개를 헷갈리지 않게 조심해야 함.
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function Create() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [createArr, setCreateArr] = useState([]);

  // 사용자가 보고 있는 페이지를 방금 생성한 라스트 아이디에 해당하는 글로 리디렉션을 시켜야 함.
  const router = useRouter();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // setCreateArr((prev) => {
          //   return [...prev, { id: uuidv4(), title: title, body: content }];
          // });
          // setTitle("");
          // setContent("");

          const title = e.target.title.value;
          const body = e.target.body.value;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };

          // 서버와 통신하는 코드
          // 서버 쪽으로 데이터를 전송해서 데이터를 추가
          fetch(`http://localhost:9999/topics`, options) //
            .then((res) => res.json()) //
            .then((result) => {
              console.log(result);
              const lastId = result.id;

              // router로 방금 생성한 글로 리디렉션을 시킬 수 있음.
              router.push(`read/${lastId}`);
            });
        }}
      >
        <p>
          <input
            // onChange={(e) => {
            //   e.preventDefault();
            //   setTitle(e.target.value);
            // }}
            type="text"
            name="title"
            placeholder="title"
            // value={title}
          />
        </p>
        <p>
          <textarea
            // onChange={(e) => {
            //   e.preventDefault();
            //   setContent(e.target.value);
            // }}
            name="body"
            placeholder="body"
            // value={content}
          />
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>

      <div class="createWrap">
        {/* {createArr?.map((arr) => {
          return (
            <div class="create" key={arr.id}>
              <p>title : {arr.title}</p>
              <p>body : {arr.body}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
