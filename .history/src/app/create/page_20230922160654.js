// 사용자와 상호작용을 하는 컴포넌트 => Client Component

"use client";

import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createArr, setCreateArr] = useState([]);

  console.log(title, content, createArr);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCreateArr((prev) => {
            return [...prev, { title: title, body: content }];
          });
          setTitle("");
          setContent("");
        }}
      >
        <p>
          <input
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            placeholder="title"
            value={title}
          />
        </p>
        <p>
          <textarea
            onChange={(e) => {
              e.preventDefault();
              setContent(e.target.value);
            }}
            name="body"
            placeholder="body"
            value={content}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>

      {createArr?.map((arr, index) => {
        return (
          <div key={index}>
            <p>{arr.title}</p>
            <p>{arr.body}</p>
          </div>
        );
      })}
    </div>
  );
}
