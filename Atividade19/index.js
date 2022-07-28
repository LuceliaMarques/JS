import { home } from "./modules/home.js";
import { main } from "./modules/main.js";

const app = document.getElementById("app");
app.innerHTML = home();

document.getElementById("btn").addEventListener("click", main);