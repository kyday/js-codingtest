function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 상, 하, 좌, 우 방향
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  // 방문 여부를 기록할 배열
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  // BFS 탐색을 위한 큐
  let queue = [[0, 0, 1]];
  let front = 0;  // 큐의 앞부분을 참조하기 위한 인덱스

  while (front < queue.length) {
    const [x, y, distance] = queue[front];
    front++;

    // 도착점에 도달했으면 현재까지의 이동 거리 반환
    if (x === n - 1 && y === m - 1) {
      return distance;
    }


    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // 범위 내에 있고, 벽이 아니며, 아직 방문하지 않은 곳으로만 이동
      if (newX >= 0 && newY >= 0 && newX < n && newY < m && maps[newX][newY] === 1 && !visited[newX][newY]) {
        visited[newX][newY] = true;  // 방문 표시
        queue.push([newX, newY, distance + 1]);
      }
    }
  }

  // 상대팀 진영에 도달하지 못한 경우 -1 반환
  return -1;
}