//biblioteca para capturar a entrada de valores
const prompt = require("prompt-sync")();

function questao1(){
//1 - Crie um jogo onde o computador gera um número aleatório de 1 a 20, e o usuário
// precisa adivinhar qual é. O jogo deve dar dicas se o número digitado for maior ou menor
// que o número secreto. O jogo só termina quando o usuário acertar.
// Dica: utilize a biblioteca Math para gerar os números aleatórios;

//gerar numero aleatorio
    const randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);

//gerar decrementos e incrementos para a dica de número
    const randomDecremento = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    const randomIncremento = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    console.log(`O número gerado está entre ${(randomNumber - randomDecremento) * (1 ** 2)} e ${(randomNumber + randomIncremento) * (1 ** 2)}`);
    let numEscolhido = Number(prompt("Digite o numero que você acha que seja o numero secreto: "));
    console.log(numEscolhido)

//validação do numero escolhido
    while (randomNumber !== numEscolhido) {
        console.log("ERROU! O número digitado não é o número aleatório gerado.");
        numEscolhido = Number(prompt("Digite o numero que você acha que seja o numero secreto: "));
        console.log(numEscolhido);
    }

//mensagem de conclusão do desafio
    console.log(`CORRETO! O numero gerado foi ${numEscolhido}`);
}

function questao2(){
    //2 –Crie um jogo de Pedra, Papel ou Tesoura onde:
// • O usuário escolhe uma das três opções digitando no prompt().
// • O computador escolhe uma opção aleatória.
// • O programa deve determinar o vencedor e exibir o resultado no console.log().
// Dica: utilize a biblioteca Math para gerar os números aleatórios (opções que o
// computador pode escolher);

//array para guardar as opções de jogadas

    const opcoesJogada = ["Papel", "Tesoura", "Pedra"];
    let jogadaEscolhida;

    do {

        console.log(" ")
        console.log("======PEDRA,PAPEL OU TESOURA======");
        console.log("1-Pedra");
        console.log("2-Papel");
        console.log("3-Tesoura");
        console.log("Digite 0 para sair")
        console.log("==================================");

        jogadaEscolhida = Number(prompt("Digite qual será a sua jogada: "));
        let jogadaJogador = opcoesJogada[jogadaEscolhida - 1];

        while (jogadaEscolhida > 3 || jogadaEscolhida < 0) {
            jogadaEscolhida = Number(prompt("Digite qual será a sua jogada: "));
            jogadaJogador = opcoesJogada[jogadaEscolhida - 1];
        }

        const randomJogada = Math.floor(Math.random() * opcoesJogada.length);
        let jogadaDaMaquina = opcoesJogada[randomJogada];

        console.clear();
        if (jogadaJogador === jogadaDaMaquina) {
            console.log("==================================");
            console.log(`${jogadaJogador} X ${jogadaDaMaquina} EMPATE!`);
            console.log("==================================");
        } else if (
            jogadaJogador === "Pedra" && jogadaDaMaquina === "Papel" ||
            jogadaJogador === "Tesoura" && jogadaDaMaquina === "Pedra" ||
            jogadaJogador === "Papel" && jogadaDaMaquina === "Tesoura"
        ) {
            console.log("==================================");
            console.log(`${jogadaJogador} X ${jogadaDaMaquina} DERROTA!`);
            console.log("==================================");
        } else if (jogadaEscolhida !== 0) {
            console.log("==================================");
            console.log(`${jogadaJogador} X ${jogadaDaMaquina} VITÓRIA!`);
            console.log("==================================");
        }
    } while (jogadaEscolhida !== 0);
}

function questao3(){
    // 3 - Crie um programa que pede ao usuário para digitar um número e, em seguida, exibe
// a tabuada desse número de 1 a 10 no formato de uma tabela.
// Exemplo de saída:
// Se o número escolhido por 5, a saída será:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
// Dica: utilize o laço de repetição “for”;

    let numTabuada = Number(prompt("\nDigite o numero q deseja para gerar a tabuada: "));

    console.log(" ");

    for (let i = 0; i <= 10; i++) {
        console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
    }
}

function questao4(){
    // 4 - Crie um programa que desenha um triângulo de asteriscos (*) no console, onde o
// número de linhas é especificado pelo usuário.
//     Exemplo de saída:
//     Se o usuário digitar 5 para o número de linhas, o resultado será:
// *
// **
// ***
// ****
// *****
// Dica: utilize o laço de repetição “for”;

    let camadasEscolhida = Number(prompt("\nDigite o numero q deseja para gerar o triângulo de asterísticos: "));

    console.log(" ");
    let asteristico = " ";

    for (let i = 0; i < camadasEscolhida; i++) {
        asteristico += "*";
        console.log(asteristico)
    }
}

function questao5(){
// 5 - Escreva um programa para encontrar a soma da série 1 + 11 + 111 + ... n termos.
//     Conforme a entrada a seguir:
//     Exemplo da saída:
//     Se o usuário digitar a quantidade de termos igual a 5, o resultado será:
//     1 + 11 + 111 + 1111 + 11111
// A soma é: 12.345
// Dica: utilize o laço de repetição “for”;

    let num = prompt("\nDigite um numero para soma-lo em série: ");
    let numSerie = "";
    let soma = 0;

    console.log(" ")
    for(let i = 0; i < num; i++){
        numSerie += "1";
        console.log(`+ ${numSerie}`);
        soma += Number(numSerie);
    }

    console.log(`Resultado: ${soma}`);
}

let opcao;

do{
    console.log(" ")
    console.log("==============LISTA===============");
    console.log("questao1");
    console.log("questao2");
    console.log("questao3");
    console.log("questao4");
    console.log("questao5");
    console.log("==================================");
    console.log("Digite 0 para sair")
    console.log("==================================");
    opcao = Number(prompt("Digite a opcao: "));

    while(opcao > 5){
    opcao = Number(prompt("Digite a opcao: "));
    }

    switch (opcao) {
        case 1:
            questao1();
            break;
        case 2:
            questao2();
            break;
        case 3:
            questao3();
            break;
        case 4:
            questao4();
            break;
        case 5:
            questao5();
            break;
    }

}while (opcao !== 0);

