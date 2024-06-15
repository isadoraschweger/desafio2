function calcularSaldoEVitoria(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

// Função para simular a entrada dos dados (substitua pelo seu método de entrada)
function gets() {
    const input = prompt("Digite a quantidade de vitórias e derrotas, separados por espaço:");
    return input;
}

// Simulação da entrada dos dados
const entrada = gets();
const [vitorias, derrotas] = entrada.split(' ').map(Number);

// Chama a função para calcular e imprimir o resultado
calcularSaldoEVitoria(vitorias, derrotas);
