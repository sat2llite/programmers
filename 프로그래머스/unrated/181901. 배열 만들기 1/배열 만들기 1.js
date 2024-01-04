function solution(n, k) {
    let result = [];
    
    for (let i = 0; i <= n; i+=k) {
        result.push(i);
    }
    
    return result.splice(1);
}