import API from "./API.js"

export async function loadLeaderboard() {
  return await API.fetchLeaderboard()
}
