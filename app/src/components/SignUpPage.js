import { signUp } from "../services/Auth";

export class SignUpPage extends HTMLElement {

  #formData = {
    "username": "",
    "email": "",
    "password": ""
  }

  constructor() {
    super()
  }

  connectedCallback() {
    const template = document.getElementById("signup-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    this.setFormBindings(this.querySelector('#signUpForm'))
  }

  setFormBindings(form) {
    if (form) {

      form.addEventListener("submit", event => {
        event.preventDefault()

        signUp(this.#formData.username, this.#formData.email, this.#formData.password)

        this.#formData.username = "";
        this.#formData.email = "";
        this.#formData.password = "";

      })

      this.#formData = new Proxy(this.#formData, {
        set(target, property, value) {
          target[property] = value;
          form.elements[property].value = value;
          return true;
        }
      });

      Array.from(form.elements).forEach(element => {
        element.addEventListener("change", event => {
          this.#formData[element.name] = element.value;
        })
      })
    }
  }
}

customElements.define("signup-page", SignUpPage);
