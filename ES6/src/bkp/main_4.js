// REST

const usuario ={
    nome: 'Diego',
    idade: 23,
    empresa:'Rocketseat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


// exemplo 2
const arr = [1,2,3,4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);


// ex 3
function soma(...params){
    return params.reduce((total,next) => total + next );
}
console.log(soma(1,3,5,6))


// SPREAD
const arr1 = [1,2,3];
const arr1 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//ex 2

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};
console.log(usuario2);