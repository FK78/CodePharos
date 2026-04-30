import type { Route } from "./+types/register";
import { NavBar } from "../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Register for CodePharos" },
  ];
}

export default function Register() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="max-w-md">
          <p className="text-sm font-semibold uppercase text-[#F5A623]">
            Account
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#FDE8C8]">Register</h1>
          <p className="mt-4 text-[#E8E0D4]/80">
            Registration form coming soon.
          </p>
        </section>
      </main>
    </>
  );
}
