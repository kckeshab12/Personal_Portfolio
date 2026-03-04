import mysql from "mysql2/promise";

// Create MySQL connection
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

async function createConnectionSafe() {
  try {
    if (!dbConfig.host || !dbConfig.user || !dbConfig.database) {
      return null;
    }
    return await mysql.createConnection(dbConfig);
  } catch {
    return null;
  }
}

export async function GET() {
  const conn = await createConnectionSafe();
  if (!conn) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const [rows] = await conn.query("SELECT * FROM image_reactions");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await conn.end();
  }
}

export async function POST(req) {
  try {
    const { image_id, type } = await req.json();
    if (!image_id || !["love", "like"].includes(type)) {
      return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
    }

    const conn = await createConnectionSafe();
    if (!conn) {
      return new Response(
        JSON.stringify({ love_count: type === "love" ? 1 : 0, like_count: type === "like" ? 1 : 0 }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if image already exists
    const [rows] = await conn.query("SELECT * FROM image_reactions WHERE image_id = ?", [image_id]);

    let updatedCounts;

    if (rows.length === 0) {
      // Insert new record if not exists
      const love = type === "love" ? 1 : 0;
      const like = type === "like" ? 1 : 0;
      await conn.query("INSERT INTO image_reactions (image_id, love_count, like_count) VALUES (?, ?, ?)", [image_id, love, like]);
      updatedCounts = { love_count: love, like_count: like };
    } else {
      // Update existing record
      let love = rows[0].love_count;
      let like = rows[0].like_count;

      if (type === "love") love++;
      else like++;

      await conn.query("UPDATE image_reactions SET love_count = ?, like_count = ? WHERE image_id = ?", [love, like, image_id]);
      updatedCounts = { love_count: love, like_count: like };
    }

    await conn.end();

    return new Response(JSON.stringify(updatedCounts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ love_count: 0, like_count: 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
