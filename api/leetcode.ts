export default async function handler(req: Request) {
  console.log("✅ Function reached");

  return new Response(
    JSON.stringify({
      success: true,
      message: "Hello from Vercel",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}