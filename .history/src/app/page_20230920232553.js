export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <img
        style={{
          display: "inline",
          width: 200,
          height: 200,
          objectFit: "cover",
        }}
        src="/hello.png"
        alt="water"
      />
    </>
  );
}
