function solution(n) {
    // 반복문 이용   
    for (let i = 1; i <= n; i++) {
        if (n % i == 1) return i;
    }
}