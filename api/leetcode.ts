import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const username = "johnnythegold41";

    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
    });

    console.log("LeetCode Status:", response.status);

    const result = await response.json();

    console.log(JSON.stringify(result, null, 2));

    if (!result.data?.matchedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const stats =
      result.data.matchedUser.submitStatsGlobal.acSubmissionNum;

    const easy =
      stats.find((s: any) => s.difficulty === "Easy")?.count ?? 0;

    const medium =
      stats.find((s: any) => s.difficulty === "Medium")?.count ?? 0;

    const hard =
      stats.find((s: any) => s.difficulty === "Hard")?.count ?? 0;

    const total =
      stats.find((s: any) => s.difficulty === "All")?.count ?? 0;

    return res.status(200).json({
      easy,
      medium,
      hard,
      total,
    });
  } catch (err: any) {
    console.error(err);

    return res.status(500).json({
      error: err.message,
    });
  }
}