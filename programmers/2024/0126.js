/* 배열 중앙 값 구하기 */

function solution(array) {
  array.sort((a, b) => a - b);
  return array[~~(array.length / 2)];
}
