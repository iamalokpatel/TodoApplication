"use client";

import Link from "next/link";

export default function TodoNavbar() {
  return (
    <nav className=" navbar">
      <div className="navlogo">
        <Link href="/" className=" no-underline navlogo ">
          Todo
        </Link>
      </div>
    </nav>
  );
}
