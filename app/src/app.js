import Router from './services/Router.js';

import { SignInPage } from './components/SignInPage.js';
import { SignUpPage } from './components/SignUpPage.js';
import { LandingPage } from './components/LandingPage.js';
import { LeaderboardPage } from './components/LeaderboardPage.js';

window.app = {}
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});
