"use client";

import Link from "next/link";

export default function TodoNavbar() {
  return (
    <nav className="bg-white shadow-md navbar">
      <div className="navlogo">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 no-underline text-5xl font-bold text-justify navlogo "
        >
          Todo
        </Link>
      </div>
    </nav>
  );
}
