function solution(n) {
    const num = Math.floor(Math.sqrt(n));
    if (n == Math.pow(num, 2)) return Math.pow(num + 1, 2);
    else return -1;
}