"use server";

import { dbAddPost } from "@/lib/posts";

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
}
