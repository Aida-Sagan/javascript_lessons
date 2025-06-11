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

byTwo(); // 12
byFive(); // 17