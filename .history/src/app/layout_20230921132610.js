import Link from "next/link";
import "./globals.css";
import { useEffect } from "react";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by min",
};

export default function RootLayout({ children }) {
  useEffect(() => {}, []);
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li>
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
