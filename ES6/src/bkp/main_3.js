function soma(a= 3,b = 6){
    return a + b;
}

console.log(soma(1)); 
console.log(soma()); 


const outro = (a= 3,b = 6) => a + b


const usuario = {
    nome: "Rafael",
    idade: 23,
    endereco:{
        cidade:"Sao Paulo",
        estado: "SC"
    }
};

// normalmente vc faria
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

// desestrutracao
const { nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(endereco);
 