/* Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js */

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    { 
        nome: "Jasmine",
        tecnologias: ["Javascript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
];

function exibeUsuario() {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}.`)  
    }
}

exibeUsuario(usuarios);

