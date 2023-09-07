import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ol>
          <li>
            <a href="/read/1">html</a>
            <a href="/read/2">css</a>
          </li>
        </ol>

        {children}

        <ul>
          <li>
            <a href="/create">create</a>
          </li>
        </ul>
      </body>
    </html>
  );
}
