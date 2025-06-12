function writeName() {
    let name = 'aya';
    return name;
    
}

/* console.log(name);
let name = 'Aida';
console.log(name); */


function f() {
    //let textt = "hello world!";

    return function () {
        //textt = "hello!";
        console.log(textt);
        var textt = "world";
    }
}

/* let func = f()
func() */

function createCounter(start) {
    let count = start;

    function step(stepSize) {
        function increment() {
            count += stepSize;
            console.log(`текущее значение: ${count}`);
        }

        return increment;
    }

    return step;
}

let counterFactory = createCounter(10);

let byTwo = counterFactory(2);
let byFive = counterFactory(5);

byTwo();
byFive();
