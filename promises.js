// синхронный код
console.log('Приветствие!')
let a = 50 + 100;
console.log(a)
console.log('Bye!')

// асинхронный код
console.log('Приветствие !!!')

setTimeout( () => {
    console.log('смс в setTimeout через 3 секунды')
}, 3000);

console.log('POKA!')