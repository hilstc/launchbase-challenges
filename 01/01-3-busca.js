/* Baseado no desafio 01-3-tecnologias.js, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna se o usuário trabalha com CSS ou não. 
Essa função deve retornar um boolean true/false.

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima.
Se sim, imprima em tela as informações do usuário. */

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

function checaSeUsuarioUsaCSS(usuario) {

    for( let tecnologia of usuario.tecnologias ) {
        const encontreiTecnologiaCSS = tecnologia === 'CSS' 
        if(encontreiTecnologiaCSS) {
            return true;
        }
    }
    return false;
}


for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
    
    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`);
        
    }
}


// function exibeSeUsuarioUsaCSS(usuario) {
//     for (i = 0; i < usuarios.length; i++) {
//         if (usaCSS[i] == true) {
//             console.log(`${usuarios[i].nome} utiliza CSS.`);            
//         } else {
//             console.log(`${usuarios[i].nome} não utiliza CSS.`);            
//         }
//     }
// }

// checaSeUsuarioUsaCSS(usuarios);

// exibeSeUsuarioUsaCSS(usuarios);




