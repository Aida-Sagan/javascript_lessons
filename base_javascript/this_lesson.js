'use strict';
// this - указатель на того кто вызывает функцию

// MAIN RULE: this - это обьект, который ВЫЗВАЛ ФУН_ИЮ (или в чьем контексте функция выполняется)

/**
 * Где вызывается функция:                       Что будет this
 * 
 * 1. внутри обьекта (метод)                      сам обьект
 * 2. просто обычная функция в коде               undefined(в случае строгого режима), иначе глобальный обьект window
 * 3. внутри стрелочная функция                   this берет из места где была создана (НЕ ИМЕЕТ СОБСТВЕННОГО THIS)
 * 4. конструктор(new)                            
 * 5. в обработчике событий DOM структуры           
 * 6. функция через call(), apply(), bind()       
 */

// const user = {
//     name: 'Aida',

//     sayHi() {
//         // console.log(name); //ReferenceError: name is not defined
//         console.log(this.name); // Aida
//     }
// };

// user.sayHi();


// function show() {
//     console.log(this)
// }
// show()


const user = {
    age: 34,
    sayAge: () => {
        // this.age = 45;
        console.log(this.age); // undefined
    }
};

user.sayAge();

// решение

// const user = {
//     age: 34,
//     sayAge: function() {
//         // this.age = 45;
//         console.log(this.age); // undefined
//     }
// };

// user.sayAge();
