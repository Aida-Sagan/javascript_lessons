const btn= document.getElementById("btn2");
const parent = document.getElementById("parent");

// parent.addEventListener('click', () => {
//     console.log('Был нажат родительский класс (тег)');
// })

btn.addEventListener('click', () => {
    console.log('была нажата кнопка');
})

const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        alert(`кликнули на ${event.target.textContent}`)
    }
})