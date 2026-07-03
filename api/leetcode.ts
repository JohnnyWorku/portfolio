import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("Function executed");

  res.status(200).json({
    success: true,
    message: "Hello from Vercel",
  });
}