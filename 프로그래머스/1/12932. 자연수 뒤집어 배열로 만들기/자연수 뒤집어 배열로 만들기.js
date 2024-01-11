function solution(n) {
    let arr = String(n).split("").reverse().map(Number);
    // return arr.sort((a, b) => b - a);
    return arr;
}