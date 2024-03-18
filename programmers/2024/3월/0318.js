/**
 
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

num_list	result
[3, 4, 5, 2, 1]	393
[5, 7, 8, 3]	581


 **/

function solution(num_list) {
  var answer = 0;

  let odd = "";
  let even = "";

  for (let i = 0; num_list.length > i; i++) {
    if (num_list[i] % 2 === 1) {
      odd += String(num_list[i]);
    } else {
      even += String(num_list[i]);
    }
  }

  return Number(even) + Number(odd);
}
