import "./globals.css";
import TodoNavbar from "@/components/TodoNavbar";

export const metadata = {
  title: "My Todo App",
  description: "Using Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="Home">
      <body>
        <TodoNavbar />
        {children}
      </body>
    </html>
  );
}
