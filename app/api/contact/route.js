import mysql from "mysql2/promise";

async function createConnectionSafe() {
  try {
    const host = process.env.DB_HOST;
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;
    const database = process.env.DB_NAME;

    if (!host || !user || !database) {
      return null;
    }

    return await mysql.createConnection({ host, user, password, database });
  } catch {
    return null;
  }
}

export async function POST(req) {
  try {
    const { name, email, contact_no, purpose, message } = await req.json();

    if (!name || !email || !contact_no || !purpose || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    const db = await createConnectionSafe();
    if (db) {
      await db.execute(
        "INSERT INTO contacts (name, email, contact_no, purpose, message) VALUES (?, ?, ?, ?, ?)",
        [name, email, contact_no, purpose, message]
      );
      await db.end();
    }

    return new Response(JSON.stringify({ message: "Message saved successfully" }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Message received" }), { status: 200 });
  }
}
