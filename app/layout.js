import "./globals.css";

export const metadata = {
  title: "My Project",
  description: "My really cool project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
