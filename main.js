function criarAnimal(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        fazerSom: function() {
            console.log("Este animal faz um som.");
        }
    };
}


function criarCachorro(nome, idade) {
    let cachorro = criarAnimal(nome, idade);
    cachorro.fazerSom = function() {
        console.log("Au Au!");
    };
    return cachorro;
}


function criarGato(nome, idade) {
    let gato = criarAnimal(nome, idade);
    gato.fazerSom = function() {
        console.log("Miau!");
    };
    return gato;
}


let cachorro1 = criarCachorro("Rex", 3);
let gato1 = criarGato("Whiskers", 2);
let gato2 = criarGato("Mittens", 1);


cachorro1.fazerSom();
gato1.fazerSom();
gato2.fazerSom();