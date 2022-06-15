function solution(star) {
  for (let i = 1; i <= star; i++) {
    console.log(" ".repeat(star - i) + "*".repeat(i));
  }
}

solution(5);
