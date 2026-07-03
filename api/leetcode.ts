export default async function handler(req: Request): Promise<Response> {
    try {
        const username = "johnnythegold41";

        const query = `
        query userProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            profile {
              ranking
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

        const result = await response.json();

        const stats =
            result.data.matchedUser.submitStatsGlobal.acSubmissionNum;

        const easy =
            stats.find((x: any) => x.difficulty === "Easy")?.count ?? 0;

        const medium =
            stats.find((x: any) => x.difficulty === "Medium")?.count ?? 0;

        const hard =
            stats.find((x: any) => x.difficulty === "Hard")?.count ?? 0;

        const total =
            stats.find((x: any) => x.difficulty === "All")?.count ?? 0;

        return Response.json({
            easy,
            medium,
            hard,
            total,
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                error: "Failed to fetch LeetCode stats",
            },
            {
                status: 500,
            }
        );
    }
}