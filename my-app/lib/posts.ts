import { Row } from "@libsql/client";
import { db } from "./db";

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
