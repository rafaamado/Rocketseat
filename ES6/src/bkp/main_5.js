const nome = "Diego";
const idade = 23;

console.log('Meu nome é ' + nome + 'e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// object short sintax

const nome = 'Diego';
const idade = 23;

/* normalmente faria assim:
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat',
}; */

const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat',
};
console.log(usuario);