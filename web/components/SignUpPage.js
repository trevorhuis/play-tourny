export class SignUpPage extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const template = document.getElementById("signup-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("signup-page", SignUpPage);
