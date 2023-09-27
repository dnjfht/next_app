"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Update() {
  const router = useRouter();
  const id = useParams().id;

  useEffect(() => {
    // 수정하기 전 데이터가 필요하므로 read 페이지에서 가져옴.
    fetch(`http://localhost:9999/topics/${id}`)
      .then((res) => res.json()) //
      .then((result) => console.log(result));
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const title = e.target.title.value;
          const body = e.target.body.value;
          console.log(title, body);
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

              router.refresh();

              // router로 방금 생성한 글로 리디렉션을 시킬 수 있음.
              router.push(`read/${lastId}`);
              // 그런데 여기서 문제점이 하나 발생 : 글 목록이 갱신이 되지 않음.
            });
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>

      <div ="createWrap"></div>
    </div>
  );
}
