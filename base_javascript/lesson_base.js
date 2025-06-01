function counter() {
    let count = 5;

    return function() {
        count++;
        return count;
    }
}

// let
// const
// var

const c = counter();



console.log(c()); // 6
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c()); 
