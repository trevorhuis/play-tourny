const API = {
  leaderboardUrl: "src/data/leaderboard.json",
  fetchLeaderboard: async () => {
    const result = await fetch(API.leaderboardUrl)
    return await result.json()
  },
  signin: async (email, password) => {
    console.log('email', email)
    console.log('password', password)
  },
  signup: async (username, email, password) => {
    console.log('username', username)
    console.log('email', email)
    console.log('password', password)
  }
}

export default API;
