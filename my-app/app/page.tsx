import { actionAddPost } from "@/actions/postsactions";
import { dbGetPosts } from "@/lib/posts";
import Image from "next/image";

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
          <div
            key={post.id}
            className="inline-block p-5 m-5 shadow-lg rounded-2xl border bg-white hover:bg-teal-50 transition duration-1000 ease-in-out"
          >
            <h1 className="font-extralight text-lg">{post.name}</h1>
            <p>{post.quote}</p>
            <div className="text-white font-light text-lg bg-teal-400 hover:bg-teal-500 active:bg-slate-300 transition duration-500 ease-in-out rounded-full pl-2 pr-4 inline-block mt-2 cursor-default">
              <button>
                {" "}
                <Image
                  src="like.svg"
                  alt="Like Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 fill-current ml-1 mr-2"
                />
              </button>
              {post.likes}{" "}
              <button>
                {" "}
                <Image
                  src="dislike.svg"
                  alt="Like Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 fill-current ml-1 mr-2"
                />
              </button>
              {post.dislikes}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
