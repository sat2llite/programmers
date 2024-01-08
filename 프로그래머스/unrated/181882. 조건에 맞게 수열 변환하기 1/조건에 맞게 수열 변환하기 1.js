function solution(arr) {
    return arr.map((el, idx) => {
        if (arr[idx] >= 50 && arr[idx] % 2 == 0) return arr[idx] / 2;
        else if (arr[idx] < 50 && arr[idx] % 2 == 1) return arr[idx] * 2;
        else return el;
    });
    
}