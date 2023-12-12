function solution(n, k) {
    // n 양꼬치
    // k 음료수
    let result = 0;
    result = (n*12000)+(k*2000)-(Math.floor(n/10)*2000);
    
    return result;
}