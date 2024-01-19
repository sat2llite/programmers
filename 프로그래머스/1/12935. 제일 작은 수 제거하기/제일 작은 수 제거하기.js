function solution(arr) {
    let minArr = Math.min(...arr); // 최소값 찾기
    let index = arr.indexOf(minArr); // 최소값 인덱스 찾기
    arr.splice(index, 1);
    
    return arr.length ? arr : [-1];
}