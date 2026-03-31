//preços
const precoGasolina = 6.79;
const precoEtanol = 5.40;
const precoDiesel = 6.20;

const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value);

    //erro caso o usuário tente inserir um valor negativo
    if(litros < 0){
        document.querySelector("#resultado").textContent = "Insira um valor positivo"
        return;
    }
    //erro caso o valor não seja inserido
    if(!tipo){
        document.querySelector("#resultado").textContent = "Insira um valor"
        return;
    }

    //usando objetos
    let precos = {
        gasolina: precoGasolina,
        etanol: precoEtanol,
        diesel: precoDiesel,
    };

    let precoPorLitro = precos[tipo];

    console.log(precoPorLitro);
    calcularAbastecimento(precoPorLitro, litros);
};

const calcularAbastecimento = (precoCombustivel, litros) => {
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;
    if (litros<=0 || !litros){
        document.getElementById("resultado").textContent = "Insira um valor";
        return;
    } else {
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
    }
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//corrigir o pressionar a tecla Enter (preventDefault)
litros.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        atualizarValor();
    }
});

//formatar o resultado final R$ 00,00. (toFixed ou toLocaleString)
const formatarMoeda = (valor) => {
    return "R$ " + valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
});
};
