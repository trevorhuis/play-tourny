import API from "./API";

export async function signIn(email, password) {
  await API.signin(email, password)
}

export async function signUp(username, email, password) {
  await API.signup(username, email, password)
}
