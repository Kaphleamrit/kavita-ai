export async function GET() {

  const data = {"hello": "world"}; // Placeholder for actual data fetching logic
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}