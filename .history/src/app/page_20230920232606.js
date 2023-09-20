export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <img
        style={{
          display: "block",
          width: 300,
          height: 300,
          objectFit: "cover",
        }}
        src="/hello.png"
        alt="water"
      />
    </>
  );
}
