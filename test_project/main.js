const products = [
    {id: 1, name: 'Ноутбук'},
    {id: 2, name: 'Смартфон'},
    {id: 3, name: 'Пылесос'},
    {id: 4, name: 'Холодильник'},
    {id: 5, name: 'Наушники'},
    {id: 6, name: 'Стол'}
]
let cart = [];
//обратиться к хтмл коду к id 
const productsList = document.getElementById('products');
const cartList = document.getElementById('cart');

//отобразить товары из массива продактс на странице
function renderProducts() {
    productsList.innerHTML = '';

    products.forEach(product => {
        //динамически создали тег li
        const li = document.createElement('li');
        li.textContent = product.name;

        const button = document.createElement('button');
        button.textContent = 'Добавить в корзину';

        button.onclick = () => addToCart(product);


        li.appendChild(button);
        productsList.appendChild(li);
    })
}

// добавление товара в корзину
function addToCart(product) {
    cart.push(product);
    renderCart();
}



// показываем корзину
function renderCart() {
    cartList.innerHTML = '';

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;

        const button = document.createElement('button');
        button.textContent = 'Удалить из корзины';
        button.onclick = () => deleteFromCart(product);
        
        li.appendChild(button);
        cartList.appendChild(li)
    })
}

function deleteFromCart(id) {
    const index = cart.findIndex(el => el.id !== id);
    if(index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
    
}

renderProducts()