function solution(left, right) {
    // 약수의 개수가 홀수일 때는 제곱근일 때

    let result = 0;
    
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i)) == true) {
            result -= i;
        } else {
            result += i;
        }
    }
    
    return result;
}