function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0, 1]];
  let front = 0; // shift 대신 인덱스로 처리

  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  while (front < queue.length) {
    const [x, y, steps] = queue[front++];
    
    if (x === n - 1 && y === m - 1) {
      return steps;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < n &&
        ny >= 0 && ny < m &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = 0; // 방문 처리
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}