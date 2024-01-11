function solution(n) {
    let result = [];
    
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) result.push(i);
        else if (n == 0) return 0;
    }
    return result.reduce((a, b) => a + b);
}