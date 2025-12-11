export class SignInPage extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const template = document.getElementById("signin-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("signin-page", SignInPage);
