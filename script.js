const body = document.body;
const header = document.createElement("header");
const contador = document.createElement("span");
const titulo = document.createElement("h1");
const formDivBotoes = document.createElement("div");
const form = document.createElement("form");
const spanForm = document.createElement("span");
const button = document.createElement("button");
const button01 = document.createElement("button");
const containerPalavras = document.createElement("div");
const termos = JSON.parse(localStorage.getItem("termos")) || [];
const definições = JSON.parse(localStorage.getItem("definições")) || [];
const estudados = JSON.parse(localStorage.getItem("estudados")) || [
  { buttons: [] },
  { contador: 0 },
  { maxPorDiv: 0 },
];

const maxPorDiv = 30;

containerPalavras.classList.add("containerPalavras");

function salvar() {
  localStorage.setItem("termos", JSON.stringify(termos));
  localStorage.setItem("definições", JSON.stringify(definições));
  localStorage.setItem("estudados", JSON.stringify(estudados));
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

  let regex = new RegExp(String(input01.value), "ig");
  let existe = termos.indexOf(input01.value);

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
  let max = maxPorDiv;
  let c = 0;
  let vDiv = 0;

  limpar();
  const lPalavras = termos.length;
  const nDivs = Math.ceil(lPalavras / max);

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

    const palavrasEstudadas = document.createElement("button");
    divBotoes.appendChild(palavrasEstudadas);
    palavrasEstudadas.name = "button " + vDiv;
    palavrasEstudadas.textContent = "OK";
    palavrasEstudadas.addEventListener("click", estudadas);
    vDiv++;
    if (estudados[0].buttons.indexOf(palavrasEstudadas.name) > -1) {
      palavrasEstudadas.parentNode.parentNode.classList.add("estudados");
    }

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

const estudadas = (e) => {
  e.preventDefault();
  const div = e.target.parentNode.parentNode;
  const posição = estudados[0].buttons.indexOf(e.target.name);
  const totalP = e.target.parentNode.children[0].textContent.slice(
    e.target.parentNode.children[0].textContent.search(/[0-9]/g)
  );

  div.classList.toggle("estudados");

  if (posição > -1) {
    estudados[1].contador -= Number(totalP);
    estudados[0].buttons.splice(posição, 1);
  } else {
    estudados[1].contador += Number(totalP);
    estudados[0].buttons.push(e.target.name);
  }

  contador.textContent = `Palavras Estudadas ${estudados[1].contador}`;
  salvar();
};

spanInput(form, "Termo", "inputTermo");
spanInput(form, "Definição", "inputDefinição");

body.appendChild(header);
body.appendChild(form);
body.appendChild(containerPalavras);
form.appendChild(formDivBotoes);
formDivBotoes.appendChild(button);
formDivBotoes.appendChild(button01);
header.appendChild(titulo);
header.appendChild(contador);
titulo.textContent = "WordList";
contador.textContent = `Palavras Estudadas ${estudados[1].contador}`;
contador.classList.add('contador')
button.textContent = "Adicionar";
button01.textContent = "Desfazer";
button.addEventListener("click", verificarInput);
button01.addEventListener("click", desfazer);

mostrarPalavras();
