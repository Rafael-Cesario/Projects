const divYear = document.createElement("div");
divYear.classList.add("divYear");
document.body.appendChild(divYear);

const divMouths = document.createElement("div");
divYear.appendChild(divMouths);
divMouths.classList.add("divMouths");

const mouths = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dias = (mes, ano) => {
  let data = new Date(ano, mes, 0);
  return data.getDate();
};

let m = 0;
let a = 2021; // user input year
/* let arrayYears = [];
let arrayMouths = []; */

let arrayDays = JSON.parse(localStorage.getItem("button")) || [];

const save = () => {
  localStorage.setItem("button", JSON.stringify(arrayDays));
};

const att = (e) => {
  e.preventDefault();
  let button = e.target;
  let bn = button.name;
  const index = bn.slice(bn.search(/[0-9]/g));
  console.log(index);
  if (button.value == 1) {
    button.classList.remove("buttonverde");
    button.value = 0;
    arrayDays[index][bn] = button.value;
  } else {
    button.value = 1;
    arrayDays[index][bn] = button.value;
    button.classList.add("buttonverde");
  }

  save();
};

const selectYear = () => {
  const titulo = document.querySelector(".year");
  titulo.parentNode.removeChild(titulo);
  const input = document.createElement('input')
  input.type = "text"
  divYear.appendChild(input);
};

let n = 0;
const criarDiv = (m, a) => {
  if (m == 0) {
    const h1 = document.createElement("h1");
    divYear.appendChild(h1);
    h1.classList.add("year");
    h1.textContent = a;
    h1.addEventListener("click", selectYear);
  }

  const divMouth = document.createElement("div");
  divMouth.classList.add("divMouth");
  divMouths.appendChild(divMouth);

  const h2 = document.createElement("h2");
  divMouth.appendChild(h2);
  h2.textContent = mouths[m];

  const divDays = document.createElement("div");
  divDays.className = `divDays ${m}-${a}`;
  divMouth.appendChild(divDays);

  let x = 0;

  while (x < dias(m + 1, a)) {
    const button = document.createElement("button");
    button.addEventListener("click", att);
    button.textContent = x < 9 ? "0" + (x + 1) : x + 1;
    divDays.appendChild(button);
    button.name = `btn${mouths[m]}${n + 1}`;
    n++;
    button.value = "0";
    arrayDays.push({ [button.name]: button.value });
    if (arrayDays[n]) {
      if (arrayDays[n][button.name] == 1) {
        button.value = 1;
        button.classList.add("buttonverde");
      }
    }

    x++;
  }
};

while (m < 12) {
  criarDiv(m, a);
  /*   arrayMouths.push({ [m]: arrayDays.slice() });
  arrayDays = []; */
  m++;
}

/* arrayYears.push({ [a]: arrayMouths.slice() }); */

/* console.log(arrayYears); */
