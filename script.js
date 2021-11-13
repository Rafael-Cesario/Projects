const body = document.body;
const form = document.createElement("form");
const spanForm = document.createElement("span");
const button = document.createElement("button");
const button01 = document.createElement("button");
const containerPalavras = document.createElement("div");
const termos = JSON.parse(localStorage.getItem("termos")) || [];
const definições = JSON.parse(localStorage.getItem("definições")) || [];

function salvar() {
  localStorage.setItem("termos", JSON.stringify(termos));
  localStorage.setItem("definições", JSON.stringify(definições));
}

const spanInput = (pai, titulo, classe) => {
  const divForm = document.createElement("div");
  const spanForm = document.createElement("span");
  const input = document.createElement("input");

  spanForm.textContent = titulo;
  divForm.classList.add("divForm");
  spanForm.classList.add("spanForm");
  input.classList.add(classe);

  pai.appendChild(divForm);
  divForm.appendChild(spanForm);
  divForm.appendChild(input);
};

const verificarInput = (e) => {
  e.preventDefault();
  const input01 = document.querySelector(".inputTermo");
  const input02 = document.querySelector(".inputDefinição");
  const spanForm01 = document.querySelector("form").children[0].children[0];
  const spanForm02 = document.querySelector("form").children[1].children[0];

  console.log(termos);
  let regex = new RegExp(String(input01.value), "ig");
  let existe = termos.indexOf(input01.value);
  console.log(regex);
  console.log(existe);

  if (existe > -1) {
    spanForm01.textContent = "Termo | Este termo já Existe";
    spanForm01.style.color = "crimson";
  } else {
    switch (input01.value) {
      case "":
        spanForm01.textContent = "Termo | Digite algo";
        spanForm01.style.color = "crimson";
        break;
      default:
        spanForm01.textContent = "Termo";
        spanForm01.style.color = "white";
        switch (input02.value) {
          case "":
            spanForm02.textContent = "Definição | Digite algo";
            spanForm02.style.color = "crimson";
            break;
          default:
            spanForm02.textContent = "Definição";
            spanForm02.style.color = "white";
            addPalavra(input01, input02);
        }
    }
  }
};

const addPalavra = (ter, defi) => {
  termos.push(ter.value);
  definições.push(defi.value);
  ter.value = "";
  defi.value = "";
  ter.focus();
  mostrarPalavras();
};

const mostrarPalavras = () => {
  const maxPorDiv = 50;
  let max = maxPorDiv;
  let c = 0;

  limpar();
  const lPalavras = termos.length;
  const nDivs = Math.ceil(lPalavras / max);
  console.log("nDivs = " + nDivs);

  for (let d = 0; d < nDivs; d++) {
    let quant = 0;
    const divLista = document.createElement("div");
    divLista.classList.add("divLista");
    containerPalavras.appendChild(divLista);

    const divBotoes = document.createElement("div");
    divBotoes.classList.add("divBotoes");
    divLista.appendChild(divBotoes);

    const quantidadePalavras = document.createElement("p");
    quantidadePalavras.classList.add("quantidadePalavras");
    divBotoes.appendChild(quantidadePalavras);

    /* 
    const divCheckbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const spanCheckbox = document.createElement("span");
    divCheckbox.classList.add('divCheckbox')
    spanCheckbox.classList.add("spanCheckbox");
    checkbox.type = "checkbox";
    divBotoes.appendChild(divCheckbox);
    divCheckbox.appendChild(checkbox);
    divCheckbox.appendChild(spanCheckbox); */

    const bCopiar = document.createElement("button");
    const icone = document.createElement("i");
    icone.className += "far fa-clipboard"
    bCopiar.title = "Copiar"
    divBotoes.appendChild(bCopiar);
    bCopiar.appendChild(icone);

    const divPalavras = document.createElement("div");
    divPalavras.classList.add("divPalavras");
    divLista.appendChild(divPalavras);

    while (c < max) {
      if (termos[c] == undefined) {
        break;
      } else {
        let palavrasTermos = termos[c][0].toUpperCase() + termos[c].substr(1);
        let palavrasDefinições =
          definições[c][0].toUpperCase() + definições[c].substr(1);
        const p = document.createElement("p");
        p.textContent = `${palavrasTermos} ; ${palavrasDefinições}`;
        divPalavras.appendChild(p);
        c++;
        quant++;
      }
    }

    quantidadePalavras.textContent = `Total: ${quant}`;
    max += maxPorDiv;
  }
  salvar();
};

const limpar = () => {
  const div = document.querySelector(".containerPalavras");
  div.innerText = "";
};

const desfazer = (e) => {
  e.preventDefault();
  termos.pop();
  definições.pop();
  salvar();
  mostrarPalavras();
};

const quantidadePalavras = (quantidade) => {};

body.appendChild(form);
body.appendChild(containerPalavras);

spanInput(form, "Termo", "inputTermo");
spanInput(form, "Definição", "inputDefinição");

form.appendChild(button);
button.textContent = "Adicionar";
button.addEventListener("click", verificarInput);

form.appendChild(button01);
button01.textContent = "Desfazer";
button01.addEventListener("click", desfazer);

containerPalavras.classList.add("containerPalavras");

mostrarPalavras();


//teste01