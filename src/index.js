import homeTab from './home';
import menuTab from './menu';
import contactTab from './contact';
homeTab();

// selection
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contBtn = document.querySelector("#contBtn");
homeBtn.addEventListener("click", homeTab);
menuBtn.addEventListener("click", menuTab);
contBtn.addEventListener("click", contactTab);


