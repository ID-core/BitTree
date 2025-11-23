import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const handle = url.searchParams.get("handle");
    if (!handle) {
      return new Response(JSON.stringify({ exists: false, error: true, message: "handle required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const db = client.db("BitTree");
    const collection = db.collection("links");

    const doc = await collection.findOne({ handle: handle });

    return new Response(JSON.stringify({ exists: !!doc }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ exists: false, error: true, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
