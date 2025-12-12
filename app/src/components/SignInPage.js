import { signIn } from "../services/Auth";

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


    this.setFormBindings(this.querySelector('#signInForm'))
  }

  setFormBindings(form) {
    if (form) {

      form.addEventListener("submit", event => {
        event.preventDefault()

        signIn(this.#formData.email, this.#formData.password)

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

customElements.define("signin-page", SignInPage);
