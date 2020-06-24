/* Crie um programa com um objeto para armazenar dados de um programador, como nome, idade e tecnologias com que trabalha. 
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop */

const programador = [
    { 
        nome: "C++",
        especialidade: "Desktop"
    },
    {
        nome: "JavaScript",
        especialidade: "Web/Mobile"
    }
]

console.log(`O usuário Carlos tem 32 anos e usa a tecnologia ${programador[0].nome} com especialidade em ${programador[0].especialidade}. Ele também trabalha com ${programador[1].nome}, com especialidade em ${programador[1].especialidade}.`);



