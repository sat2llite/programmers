function solution(a, b) {
    let sum = 0;
    
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    
    if (a > b) {
        for (let j = b; j <= a; j++) {
            sum += j;
        }
    }
    return sum;
}