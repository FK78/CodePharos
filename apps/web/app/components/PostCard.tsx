export type Post = {
  id: string;
  title: string;
  content: string;
  category: string;
  created_at?: string;
};

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border border-[#F5A623]/20 bg-[#1C1F26] p-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#FDE8C8]">{post.title}</h2>
        <span className="rounded-full bg-[#F5A623] px-3 py-1 text-sm font-medium text-[#1C1F26]">
          {post.category}
        </span>
      </div>
      <p className="mt-3 text-[#E8E0D4]/80">{post.content}</p>
    </article>
  );
}
