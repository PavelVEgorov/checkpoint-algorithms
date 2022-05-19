// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree
function crawlTree(arr) {
  let str = '';

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      str += functions.crawlTree(arr[i]);
    } return str;
  } return arr;
}

// Код для второго задания напиши в этой функции
function twoSum() {}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
