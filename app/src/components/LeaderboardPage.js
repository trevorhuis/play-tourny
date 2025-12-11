import { loadLeaderboard } from "../services/Leaderboard";

export class LeaderboardPage extends HTMLElement {
  constructor() {
    super()
  }

  async renderData() {
    let leaderboardData = await loadLeaderboard();
    const template = document.getElementById("leaderboard-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const leaderboardBody = this.querySelector("#leaderboard-table-body")

    for (let leader of leaderboardData.leaderboard) {
      const row = document.createElement("tr")
      row.innerHTML = `
        <td>${leader.username}</td>
        <td>${leader.score}</td>
      `;
      leaderboardBody.appendChild(row)
    }
  }

  connectedCallback() {
    this.renderData()
  }
}


customElements.define("leaderboard-page", LeaderboardPage);
