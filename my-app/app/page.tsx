import { dbGetPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await dbGetPosts();
  return (
    <main>
      My app
      <div>
        {posts.map((post) => (
          <div>
            <h1>{post.name}</h1>
            <p>{post.quote}</p>
            <p>{post.likes}, {post.dislikes}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
