import { home } from "./modules/home.js";
import { reqAPIIBGE } from "./modules/reqIBGE.js";

const app = document.getElementById("app");
app.innerHTML = home();

document.getElementById("estado").addEventListener("change", reqAPIIBGE);