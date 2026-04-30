import type { Route } from "./+types/home";
import { Link } from "react-router";
import { NavBar } from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CodePharos" },
    { name: "description", content: "CodePharos home" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-[#F5A623]">
            CodePharos
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-[#FDE8C8]">
            Learn, share, and discuss code.
          </h1>
          <p className="mt-4 text-lg text-[#E8E0D4]/80">
            Browse community posts or create an account to join the conversation.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              className="rounded-md bg-[#F5A623] px-4 py-2 text-sm font-medium text-[#1C1F26] hover:bg-[#FDE8C8]"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="rounded-md border border-[#F5A623] px-4 py-2 text-sm font-medium text-[#FDE8C8] hover:bg-[#F5A623] hover:text-[#1C1F26]"
              to="/posts"
            >
              View posts
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
