function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const gen = numbers();

console.log(gen.next().value);
console.log(gen.next().value);