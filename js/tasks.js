// // 1 - отримай body елемент і виведи його в консоль;
// console.log(document.querySelector('body'));

// // 2 - отримай елемент id="title" і виведи його в консоль;
// console.log(document.querySelector('#title'));

// // 3 - отримай елемент class="list" і виведи його в консоль;
// console.log(document.querySelector('.list'));

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// console.log(document.querySelectorAll('[data-topic]'));

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(document.querySelectorAll('[data-topic]')[0]);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const list = document.querySelectorAll('[data-topic]');
// console.log(list[list.length - 1]);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// console.log(document.querySelector('h1').nextElementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// console.log(document.querySelectorAll('h3'));

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const titles = document.querySelectorAll('h3');
// titles.forEach(item => item.classList.add('active'));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const nav = document.querySelector('li[data-topic="navigation"]');
// console.log(nav);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// nav.style.backgroundColor = 'yellow';

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// nav.querySelector('p').textContent = 'Я змінив тут текст!';

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// console.log(document.querySelector(`[data-topic="${currentTopic}"]`));

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// console.log(
//   (document.querySelector(
//     `[data-topic="${currentTopic}"]`
//   ).style.backgroundColor = 'lightblue')
// );

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// console.log(document.querySelector('.completed'));

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// document.querySelector('.completed').closest('li').remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// document
//   .querySelector('h1')
//   .insertAdjacentHTML(
//     'afterend',
//     "<p>'Об'єктна модель документа (Document Object Model)'</p>"
//   );

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const h3 = document.createElement('h3');
// h3.textContent = 'Властивість innerHTML';
// const p = document.createElement('p');
// p.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// ul.append(li);
// li.append(h3, p);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// document.querySelector('ul').insertAdjacentHTML(
//   'beforeend',
//   `<li>
//         <h3>Властивість innerHTML</h3>
//         <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//     </li>`
// );

// // 20 - очисти список
// ul.remove();

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const container = document.querySelector('.number-container');

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = () => Math.floor(Math.random() * 100) + 1;
//   const div = document.createElement('div');
//   div.classList.add('number');
//   div.textContent = randomNumber();
//   if (div.textContent % 2 === 0) {
//     div.classList.add('even');
//   } else {
//     div.classList.add('odd');
//   }
//   container.append(div);
// }

/* ========================================================================================================================================================

======================================================================================================================================================== */
