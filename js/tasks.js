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

// const form = document.querySelector('.contact-form');
// const input = form.elements['userName'];
// const span = document.querySelector('.js-username-output');

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// input.addEventListener('input', handleInput);
// function handleInput(event) {
//   if (event.currentTarget.value.trim().length < 6) {
//     input.classList.add('error');
//   } else if (event.currentTarget.value.trim().length >= 6) {
//     input.classList.replace('error', 'success');
//   }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', handleFocus);
// function handleFocus(event) {
//   if (event.currentTarget.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', handleBlur);
// function handleBlur(event) {
//   if (event.currentTarget.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid lime';
//   }
// }

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// form.addEventListener('submit', handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const input = form.elements['userName'],
//     check = form.elements['accept'];

//   if (input.value.trim() === '' || !check.checked) {
//     return alert("Don't left empty and accept the policy");
//   } else {
//     const data = { userName: input.value.trim() };
//     console.log(data);
//     input.value = '';
//     check.checked = false;
//     span.textContent = 'Anonymous';
//   }
// }

// input.addEventListener('input', handleInput);
// function handleInput(event) {
//   span.textContent = event.target.value.trim() || 'Anonymous';
// }

/* ========================================================================================================================================================

======================================================================================================================================================== */

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const box = document.querySelector('.box');
// const decreaseButton = document.querySelector('#decrease');
// const increaseButton = document.querySelector('#increase');

// const currentWidth = parseInt(getComputedStyle(box).width);
// const currentHeigth = parseInt(getComputedStyle(box).height);

// decreaseButton.addEventListener('click', event => {
//   box.style.width = currentWidth - 20 + 'px';
//   box.style.height = currentHeigth - 20 + 'px';
// });

// increaseButton.addEventListener('click', event => {
//   box.style.width = currentWidth + 20 + 'px';
//   box.style.height = currentHeigth + 20 + 'px';
// });
