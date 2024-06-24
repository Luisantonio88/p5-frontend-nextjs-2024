"use client";

import { actionAddPost } from "@/actions/postsactions";
import { useRef } from "react";

export default function PostForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addPost = async (formData: FormData) => {
    await actionAddPost(formData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={addPost} className="m-5 text-black">
      <input
        type="text"
        name="name"
        placeholder="author name"
        className="border p-2 pl-3 rounded-full mr-2 m-1"
      />
      <input
        type="text"
        name="quote"
        placeholder="quote"
        className="border p-2 pl-3 rounded-full mr-2 m-1"
      />
      <button className="rounded-full text-white bg-teal-400 hover:bg-teal-500 transition duration-500 ease-in-out pl-4 pr-4 p-2 m-1">
        Add Quote
      </button>
    </form>
  );
}
