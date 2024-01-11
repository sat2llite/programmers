function solution(n) {
    let arr = String(n).split("");
    return arr.map(Number).reduce((a, b) => a + b);
}