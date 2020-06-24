// Calcula o IMC do usuário e exibe na tela se ele está acima do peso.

const nome = "Ana";
const peso = 50;
const altura = 1.60;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Seu IMC é de ${imc}.`);    
    console.log(`${nome}, você está acima do peso.`);    
} else if (imc < 29.9) {
    console.log(`Seu IMC é de ${imc}.`);
    console.log(`${nome}, você não está acima do peso.`);    
}

