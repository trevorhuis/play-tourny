const API = {
  leaderboardUrl: "src/data/leaderboard.json",
  fetchLeaderboard: async () => {
    const result = await fetch(API.leaderboardUrl)
    return await result.json()
  }
}

export default API;
