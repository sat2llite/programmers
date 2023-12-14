function solution(numbers) {
    let result = numbers.sort((a, b) => a - b).length;
    return numbers[result-1] * numbers[result-2];
}