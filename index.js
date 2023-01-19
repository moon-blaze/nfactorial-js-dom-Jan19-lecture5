// Homework 5

// Поиск элементов
// 1
const tables = document.getElementById('age-table');
console.log(tables);

// 2
const labels = tables.getElementsByTagName('label');
console.log(labels);

// 3
const tdAge = document.getElementsByTagName('td')[0]
console.log(tdAge);

// 4
const formFirst = document.querySelector('form[name="search"]');
console.log(formFirst);

// 5
const inputFirst = formFirst.getElementsByTagName('input')[0]
console.log(inputFirst);

//6
const inputsAll = formFirst.querySelectorAll('input');
const inputLast = inputsAll[inputsAll.length - 1];
console.log(inputLast);


// Тег в комментарии

// 1. Выбрали body
// 2. Через innerHTML заменили содержимое на комментарий с tagName body = body
// 3. Используя alert, вывели body.firstChild.data, а когда мы использовали innerHTML, поменяли все данные в body, поэтому комментарий с tagName body = body - единственное, что находится в нем.

