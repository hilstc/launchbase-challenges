// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

// function somaNumeros(numeros) {
//     // Soma todos números dentro do array "numeros"
//     const soma = (a, b) => a + b
//     usuarios[i]["total_receitas"] = usuarios[i].receitas.reduce(soma).toFixed(2)
//     usuarios[i]["total_despesas"] = usuarios[i].despesas.reduce(soma).toFixed(2)
// }

// function calculaSaldo(receitas, despesas) {
//     for (i = 0; i < usuarios.length; i++) {
//         somaNumeros(usuarios)        
//         const saldo = usuarios[i].total_receitas - usuarios[i].total_despesas
     
//         if (saldo >= 0) {
//             console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}.`);   
//         } else {
//             console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}.`);            
//         }
//     }
// }

// for (let i = 0; i < usuarios.length; i++) {
//     calculaSaldo(usuario.receitas, usuario.despesas);
// }

// console.log(usuarios)

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
    
}

function somaNumeros(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma += numero
    }
    return soma
}

for (let usuario of usuarios) {

    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    const saldoPositivo = saldo >= 0

    let positivoOuNegativo

    if (saldoPositivo) {
        positivoOuNegativo = "POSITIVO"
        
    } else {
        positivoOuNegativo = "NEGATIVO"
    }
    
    console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}.`);
}








