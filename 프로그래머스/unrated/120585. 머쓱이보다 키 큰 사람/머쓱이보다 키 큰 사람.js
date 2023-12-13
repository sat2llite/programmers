function solution(array, height) {
    let result = array.map((el) => {
        if (el > height) return el;
    }).filter(item => item);
    
    return result.length;
}