"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export function Control() {
  const id = useParams().id;
  const router = useRouter();
  console.log("~ file : Control.js:7 ~ Control ~ params:", id);

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id && (
        <>
          <li>
            <Link href={`/update/` + id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(`http://localhost:9999/topics/${id}`, options)
                  .then((res) => res.json())
                  .then((result) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      )}
    </ul>
  );
}
