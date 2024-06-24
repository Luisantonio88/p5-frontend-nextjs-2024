import { actionAddPost } from "@/actions/postsactions";
import PostItem from "@/components/postItem";
import { dbGetPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const posts = await dbGetPosts();
  return (
    <main className="bg-slate-100">
      <h1 className="text-3xl bg-white pl-6 p-3 font-extralight text-teal-700 tracking-widest border">
        Quote
      </h1>
      <form action={actionAddPost} className="m-5 ">
        <input
          type="text"
          name="name"
          placeholder="author name"
          className="border p-2 pl-3 rounded-full mr-2"
        />
        <input
          type="text"
          name="quote"
          placeholder="quote"
          className="border p-2 pl-3 rounded-full mr-2"
        />
        <button className="rounded-full text-white bg-teal-400 hover:bg-teal-500 transition duration-500 ease-in-out  p-2">
          Add Quote
        </button>
      </form>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
