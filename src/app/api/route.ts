import connect from '@/utils/startMongo';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") as string;

  const client = await connect;

  // Dynamic category fetching
  const collection = client.db("resources").collection(category);
  const cursor = await collection.find();
  const data = await cursor.toArray();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
