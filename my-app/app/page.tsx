import PostItem from "@/components/postItem";
import { dbGetPosts } from "@/lib/posts";
import PostForm from "@/components/postForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const posts = await dbGetPosts();
  return (
    <main className="bg-slate-100">
      <h1 className="text-3xl bg-white pl-6 p-3 font-extralight text-teal-700 tracking-widest border">
        Quote
      </h1>
      <PostForm />
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
