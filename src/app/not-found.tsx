"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 ">
        Sorry, the Walk-in-tech innovations page you are looking for does not
        exist.
      </p>
      <Link
        href="/"
        className="text-[#024FF0] hover:underline cursor-pointer underline-offset-8  "
      >
        Go back home
      </Link>
    </div>
  );
}
