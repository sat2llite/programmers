function solution(numbers) {
    let result = 0;
    
    numbers.sort((a, b) => a - b);
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            result += i;
        }
    }
    
    return result;
}