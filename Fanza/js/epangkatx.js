const inputX = document.querySelector(".input-x");
const inputN = document.querySelector(".input-n");
const btnHitung = document.querySelector(".calculate");
const navbarNav = document.querySelector(".navbar-nav");
let btnClear = document.querySelector(".erase");
let inputs = document.querySelectorAll("input");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const calculateResultWrapper = document.querySelector(".calculate-result");

function hitungDeretEksponensial(x, n) {
  let result = 1;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= x / i;
    result += fact;
  }

  return result;
}

btnHitung.addEventListener("click", function (e) {
  e.preventDefault();
  const x = inputX.value;
  const n = inputN.value;

  const sum = hitungDeretEksponensial(x, n);

  calculateResultWrapper.classList.add("visible");

  console.log(sum);
  document.querySelector(".deret").innerHTML = `Hasil e^x (${x},${n}) : ${sum}`;
});

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  calculateResultWrapper.classList.remove("visible");
});
