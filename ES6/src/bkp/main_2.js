const arr = [1,3,4,6];
const newArr = arr.map(function(item, index){
    return item + index;
})
console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next; 
})
console.log(sum);


const filter = arr.filter(function(item){
    return item % 2 ===0;
})

console.log(filter);

const find = arr.find(function(item){
    return item == 4;
});
print(find);

// Arrow function
const newArr2 = arr.map((item) => {
    return item *2;
});
console.log(newArr2);

// 1 param
const newArr3 = arr.map( item => {
    return item *2;
});
console.log(newArr3);

// 1 linha de código
const newArr4 = arr.map( item => item *2);
console.log(newArr4);