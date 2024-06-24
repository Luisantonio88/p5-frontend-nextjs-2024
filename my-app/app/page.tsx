import { dbGetPosts } from "@/lib/posts";
import Image from "next/image";

export default async function Home() {
  const posts = await dbGetPosts();
  return (
    <main className="bg-slate-100">
      My app
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="inline-block p-5 m-5 shadow-lg rounded-2xl border bg-white"
          >
            <h1 className="font-extralight text-lg">{post.name}</h1>
            <p>{post.quote}</p>
            <div className="bg-slate-400 rounded-full p-1 pl-2 pr-4 inline-block mt-2">
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
