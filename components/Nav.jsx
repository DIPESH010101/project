import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-slate-400 py-8 px-4">
      <div className="flex justify-between w-4/5 mx-auto ">
        <div className="text-4xl text-gray-100">logo here</div>
        <ul className="flex gap-4 text-2xl text-gray-100">
          <Link href={"/"}>
            <li className="hover:scale-110 transition-all duration-200 ease-in-out">
              Home
            </li>
          </Link>
          <Link href={"/books"}>
            <li className="hover:scale-110 transition-all duration-200 ease-in-out">
              Books
            </li>
          </Link>
          <Link href={"/members"}>
            <li className="hover:scale-110 transition-all duration-200 ease-in-out">
              Members
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
