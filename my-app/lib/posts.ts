import { Row } from "@libsql/client";
import { db } from "./db";
import "server-only";

const row2Post = (row: Row) => ({
  id: row.id as number,
  name: row.name as string,
  quote: row.quote as string,
  likes: row.likes as number,
  dislikes: row.dislikes as number,
});

export type Post = ReturnType<typeof row2Post>;

export const dbGetPosts = async () => {
  const { rows } = await db.execute("select * from posts");
  return rows.map(row2Post);
};

export const dbAddPost = async (name: string, quote: string) => {
  try {
    await db.execute({
      sql: "INSERT INTO posts (name, quote) VALUES (?, ?)",
      args: [name, quote],
    });
  } catch (error) {
    console.error("Error adding post:", error);
    throw new Error("Failed to add post");
  }
};

export const dbAddLike = async (id: number, updatedLikes: number) => {
  await db.execute({
    sql: "update posts set likes = ? where id = ?",
    args: [updatedLikes, id],
  });
};

export const dbAddDislike = async (id: number, updatedDislikes: number) => {
  await db.execute({
    sql: "update posts set dislikes = ? where id = ?",
    args: [updatedDislikes, id],
  });
};

export const dbDeletePost = async (id: number) => {
  await db.execute({
    sql: "delete from posts where id = ?",
    args: [id],
  });
};
