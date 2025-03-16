function assistant(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} is ready`);
        }, time);
    })
}

async function work() {
    let assistant1 = await assistant('bob', 2000);
    console.log(assistant1);
    let assistant2 = await assistant('alice', 1000);
    console.log(assistant2);
    let assistant3 = await assistant('jack', 4000);
    console.log(assistant3);
}

work();