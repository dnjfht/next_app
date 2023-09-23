// 사용자와 상호작용을 하는 컴포넌트 => Client Component

"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [createArr, setCreateArr] = useState([]);

  console.log(title, content, createArr);

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
            method : 'POST',
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({title, body})
          }

          // 서버와 통신하는 코드
          // 서버 쪽으로 데이터를 전송해서 데이터를 추가
          fetch(`http://localhost:9999/topics`) //
          .then(res => res.json) //
          .then(result =>)
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
        {createArr?.map((arr) => {
          return (
            <div class="create" key={arr.id}>
              <p>title : {arr.title}</p>
              <p>body : {arr.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
