function solution(n, k) {
    var answer = [];
    
    for(let i = 0; i <= n; i++) {
        if(i !== 0 && i % k === 0) {
          answer.push(i);   
        }
    }
    return answer;
}