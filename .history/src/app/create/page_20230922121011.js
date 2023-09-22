// 사용자와 상호작용을 하는 컴포넌트 => Client Component

"use client";

import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");

  return (
    <form onSubmit={() => {}}>
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
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
