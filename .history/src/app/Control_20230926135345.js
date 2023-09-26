"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
  const params = useParams();
  console.log(params);

  return (
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
  );
}
