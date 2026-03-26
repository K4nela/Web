const btnIncre = document.querySelector("#incremento")
const btnDecre = document.querySelector("#decremento")
let result = document.querySelector("#resultado");
let caixaDeTexto = document.querySelector("input");
let contador = document.querySelector("#contadorDeCaracteres");
let select = document.querySelector("#selecao");
let reset = document.querySelector("#reset")

var i = 0;

btnIncre.addEventListener("click", () => {
    result.textContent = ' ';
    i++;
    result.textContent = `${i}`;
})

btnDecre.addEventListener("click", () => {
    if (i <= 0) {
        window.alert("O contador já está no zero!");
    } else {
        result.textContent = ' ';
        i--;
        result.textContent = `${i}`;
    }
})

let paragrafo = document.createElement("p");
paragrafo.id = "textoInserido";

caixaDeTexto.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        let texto = e.target.value;
        paragrafo.textContent = `${texto}`;
        document.body.appendChild(paragrafo);

        let textoSemEspaco = texto.trim();
        let caracteres = textoSemEspaco.length;
        contador.textContent = `${caracteres}`;

        if(caracteres === 0){
            paragrafo.textContent = "Digite algo!";
        }
    }
})

let area = document.createElement("div");
document.body.appendChild(area);

select.addEventListener("change", () => {
    let tipo = select.value;

    let elemento = document.createElement(tipo);

    if (tipo === "ol" || tipo === "ul") {

        for (let i = 1; i <= 3; i++) {
            let li = document.createElement("li");
            li.textContent = `Item ${i}`;
            elemento.appendChild(li);
        }

    } else {

        elemento.textContent = `Elemento: ${tipo}`;
    }

    area.appendChild(elemento);
});

reset.addEventListener("click", () => {
    location.reload();
});




