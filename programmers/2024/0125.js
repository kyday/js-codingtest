/*

첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

*/

function solution(denum1, num1, denum2, num2) {
  const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
  const getLCM = (a, b) => (a * b) / getGCD(a, b);
  const lcm = getLCM(num1, num2);

  let numerator = (denum1 * lcm) / num1 + (denum2 * lcm) / num2;
  let denominator = lcm;

  const gcd = getGCD(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;

  return [numerator, denominator];
}
