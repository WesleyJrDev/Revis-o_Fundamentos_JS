// O mesmo acontece com os ciclos:

console.clear();

for (var a = 0; a <=5; a++){
    console.log(a);
    var b = 'valor global';
}

console.log(a);
console.log(b);

console.log('-'.repeat(100));

for (let c = 0; c <= 5; c++){
    console.log(c);
    var d = 'ups!'
};

console.log(c);
console.log(d);