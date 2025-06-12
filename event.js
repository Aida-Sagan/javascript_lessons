const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const parent = document.getElementById("parent");

//1
parent.addEventListener('click', () => {
    console.log('Был нажат родительский класс (тег)');
});

/* button.addEventListener('click', (event) => {
    event.target.remove(); удаляет таргет (в этом случае кнопку)
}); */

button.addEventListener('click', (event) => {
    event.stopPropagation() // метод предотваращает распространение события (то есть строчка 6 не выполнится)
    console.log('была нажата кнопка');
});

button2.addEventListener('click', () => {
    button2.style.backgroundColor = 'lightblue';
});



//2
const spans = document.getElementById("spans");

spans.addEventListener('click', (event) => {
    event.target.remove();
});



//3
const container = document.getElementById("container");

container.addEventListener('click', (event) => {
    console.log(event.target.textContent);
});



//4, 5
const inner = document.getElementById('inner');
const middle = document.getElementById('middle');
const outer = document.getElementById('outer');

inner.addEventListener('click', (event) => {
    console.log('li clicked');
    //event.stopPropagation()
});

middle.addEventListener('click', () => {
    console.log('ul clicked');
});

outer.addEventListener('click', () => {
    console.log('div clicked');
});



// 6, 7
const buttons = document.getElementById('buttons-container');

buttons.addEventListener('click', (event) => {
    console.log(`Нажата кнопка c id ${event.target.id}, с классом ${event.target.className}: ${event.target.textContent}`);

});

/* 
* какое Различие между getElementById() и querySelectorAll() 
getElementById()                                querySelectorAll()
- возвращает один элемент с указанным айди      - возвращает все элементы с указанным айди, классом



* Как навешивать обработчики на один конкретный элемент vs несколько по общему признаку (класс).

const button = document.getElementById("btn");

button.addEventListener('click', (event) => {
    event.stopPropagation() // метод предотваращает распространение события (то есть строчка 6 не выполнится)
    console.log('была нажата кнопка');
});


const buttonsByClass = document.querySelectorAll('.btn-class')

buttonsByClass.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('one of the buttons was clicked')
    })
})
*/


/* const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        alert(`кликнули на ${event.target.textContent}`)
    }
}) */





