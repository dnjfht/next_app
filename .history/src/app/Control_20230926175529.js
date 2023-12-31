"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
  const id = useParams().id;
  console.log("~ file : Control.js:7 ~ Control ~ params:", id);

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id && (

          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      )}
    </ul>
  );
}
