import type { Route } from "./+types/posts";
import { apiFetch } from "../lib/api";
import { NavBar } from "../components/NavBar";
import { PostCard, type Post } from "../components/PostCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts" },
    { name: "description", content: "Browse public posts" },
  ];
}

export async function clientLoader() {
  return apiFetch("/posts") as Promise<Post[]>;
}

export function HydrateFallback() {
  return <p className="p-6 text-[#E8E0D4]/80">Loading posts...</p>;
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  const posts = loaderData as Post[];

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl p-6">
        <p className="text-sm font-semibold uppercase text-[#F5A623]">
          Community
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#FDE8C8]">Posts</h1>
        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
