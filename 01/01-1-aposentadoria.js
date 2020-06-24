// Calcula e exibe na tela se o usuário tem o tempo de contribuição mínimo necessário para se aposentar.

const nome2 = "Silvana";
const sexo = "M";
const idade = 48;
const contribuicao = 23;

if (sexo == "M" && contribuicao < 35) {
    console.log(`${nome2}, você ainda não pode se aposentar!`);
} else if (sexo == "M" && (contribuicao > 35)) {
    if (idade + contribuicao < 95) {
        console.log(`${nome2}, você ainda não pode se aposentar!`);
    } else {
        console.log(`${nome2}, você pode se aposentar!`);
    }
} else if (sexo == "F" && contribuicao < 30) {
    console.log(`${nome2}, você ainda não pode se aposentar!`);
} else if (sexo == "F" && contribuicao > 30) {
    if (idade + contribuicao < 85) {
        console.log(`${nome2}, você ainda não pode se aposentar!`);
    } else {
        console.log(`${nome2}, você pode se aposentar!`);
    }
}

