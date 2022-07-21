import { home } from "./modules/home.js";
import { reqChave } from "./modules/reqChave.js";

const app = document.getElementById("app");
app.innerHTML = home();

document.getElementById("btn").addEventListener("click", reqChave);