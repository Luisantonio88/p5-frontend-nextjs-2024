import { db } from "@/lib/db";

const { rows } = await db.execute("select * from posts");
console.log(rows);
