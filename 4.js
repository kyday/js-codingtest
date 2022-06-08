function solution(s) {
  const stack = [];
  for (const char of s) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      const lastChar = stack.pop();
      if (
        (char === "}" && lastChar !== "{") ||
        (char === "]" && lastChar !== "[") ||
        (char === ")" && lastChar !== "(")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
