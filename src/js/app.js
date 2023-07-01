// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function orderByProps(object, props) {
  const result = [];
  for (const prop in object) { // есть ли текущее свойство из цикла в массиве
    if (props.includes(prop)) { // если есть
      result.push({ key: prop, value: object[prop] });
    }
  }
  const sortedProps = Object.keys(object).sort();// сортировка по алфавиту

  for (const prop of sortedProps) { // общий результат
    if (!props.includes(prop)) { // если нет
      result.push({ key: prop, value: object[prop] });
    }
  }
  return result;
}
