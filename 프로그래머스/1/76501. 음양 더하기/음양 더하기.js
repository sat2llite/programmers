function solution(abs, sign) {
    let arr = [];
    
    for (let i = 0; i < abs.length; i++) {
        sign[i] ? arr.push(abs[i]) : arr.push(-abs[i])
    }
    
    return arr.reduce((a, b) => a + b);
}