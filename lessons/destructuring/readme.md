На многих картах, таких как google maps, реализован поиск мест, находящихся рядом с выбранной точкой, например, с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощённом варианте.

location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

locations – список мест на карте (массив). Каждое место – массив из двух элементов:
Первый элемент – это название места
Второй – точка на карте (массив из двух чисел-координат x и y)
point – текущая точка на карте
import { getTheNearestLocation } from '../location.js';

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если мест нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения к индексам массивов.