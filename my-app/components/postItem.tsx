"use client";

import {
  actionAddDislike,
  actionAddLike,
  actionDeletePost,
} from "@/actions/postsactions";
import { Post } from "@/lib/posts";
import Image from "next/image";

export default function PostItem({ post }: { post: Post }) {
  return (
    <div
      key={post.id}
      className="group inline-block p-5 m-5 shadow-lg rounded-2xl border bg-white hover:bg-teal-50 transition duration-1000 ease-in-out"
    >
      <h1 className="font-extralight text-lg text-black">{post.name}</h1>

      <p className="text-black">{post.quote}</p>
      <div className="flex flex-row items-center justify-center">
        <div className="text-white font-light text-lg bg-teal-400 hover:bg-teal-500 active:bg-slate-300 transition duration-500 ease-in-out rounded-full pl-2 pr-4 inline-block mt-2 cursor-default">
          <button onClick={() => actionAddLike(post.id, post.likes)}>
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
          <button onClick={() => actionAddDislike(post.id, post.dislikes)}>
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

        <div className="flex-1"></div>
        <div>
          <button
            onClick={() => actionDeletePost(post.id)}
            className="invisible group-hover:visible hover:bg-teal-100 transition duration-500 ease-in-out rounded-full ml-1 p-2 justify-center items-center mt-2"
          >
            <Image src="delete.svg" alt="Delete Icon" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
