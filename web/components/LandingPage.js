export class LandingPage extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const template = document.getElementById("landing-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("landing-page", LandingPage);
