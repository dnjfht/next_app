// "use client";
import Link from "next/link";
import "./globals.css";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by min",
};

export default async function RootLayout({ children }) {
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9999/topics") //
  //     .then((res) => res.json()) //
  //     .then((result) => setTopics(result));
  // }, []);

  const res = await fetch("http://localhost:9999/topics", {
    next: { revalidate: 0 },
  });
  const topics = await res.json();

  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>

        {/* page.js 안의 코드들을 받아옴. */}
        {children}

        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
