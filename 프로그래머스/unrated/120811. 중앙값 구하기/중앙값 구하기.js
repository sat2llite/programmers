function solution(array) {
    let length = array.sort((a, b) => a - b).length;
    return array[parseInt(length/2)];
    // return array[Math.floor(length/2)]
}