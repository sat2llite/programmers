function solution(money) {
    let result;
    return [Math.floor(money/5500), money-(Math.floor(money/5500)*5500)];
}