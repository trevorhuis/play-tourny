const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach(a => {
      a.addEventListener("click", event => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    })
    window.addEventListener("popstate", event => {
      Router.go(event.state.route, false);
    });

    Router.go(location.pathname, true, true);
  },
  go: (route, isInitialLoad = false, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("landing-page");
        break;
      case "/signin":
        pageElement = document.createElement("signin-page");
        break;
      case "/signup":
        pageElement = document.createElement("signup-page");
        break;
      case "/profile":
        break;
      case "/play":
        break;
      case "/groups":
        break;
      case "/leaderboard":
        pageElement = document.createElement("leaderboard-page");
        break;
      default:
        break;
    }

    const oldPage = document.querySelector("main").firstElementChild;
    if (oldPage) oldPage.style.viewTransitionName = "old";
    pageElement.style.viewTransitionName = "new";

    function updatePage() {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
    }

    if (isInitialLoad) {
      // We don't do a transition
      updatePage();
    } else {
      // We do a transition
      document.startViewTransition(() => {
        updatePage();
      });
    }
  }
}

export default Router
