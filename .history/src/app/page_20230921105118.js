export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <img
        style={{
          display: "block",
          width: 240,
          objectFit: "cover",
        }}
        src="/hello.png"
        alt="hello"
      />
    </>
  );
}
