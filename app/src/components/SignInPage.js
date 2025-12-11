export class SignInPage extends HTMLElement {

  #formData = {
    email: "",
    password: ""
  }

  constructor() {
    super()
  }

  connectedCallback() {
    const template = document.getElementById("signin-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }

  setFormBindings() {

  }
}

customElements.define("signin-page", SignInPage);
