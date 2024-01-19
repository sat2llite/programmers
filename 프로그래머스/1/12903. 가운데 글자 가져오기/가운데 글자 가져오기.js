function solution(s) {
    let arr = s.split("");
    let middle = Math.floor(arr.length / 2 - 1);
    
    return arr.length % 2 == 1 ? s.substr(middle + 1, 1) : s.substr(middle, 2);
}