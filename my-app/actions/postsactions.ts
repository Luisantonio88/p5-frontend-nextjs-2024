"use server";

import { dbAddDislike, dbAddLike, dbAddPost, dbDeletePost } from "@/lib/posts";
import { revalidatePath } from "next/cache";

export async function actionAddPost(formData: FormData) {
  const nameField = formData.get("name");
  if (nameField === null) {
    throw new Error(`missing name`);
  }
  const name = nameField.toString();
  const quoteField = formData.get("quote");
  if (quoteField === null) {
    throw new Error(`missing quote`);
  }
  const quote = quoteField.toString();
  await dbAddPost(name, quote);

  revalidatePath("/");
}

export async function actionAddLike(id: number, likes: number) {
  await dbAddLike(id, likes + 1);
  revalidatePath("/");
}

export async function actionAddDislike(id: number, dislikes: number) {
  await dbAddDislike(id, dislikes + 1);
  revalidatePath("/");
}

export async function actionDeletePost(id: number) {
  await dbDeletePost(id);
  revalidatePath("/");
}
