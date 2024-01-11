function solution(x, n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    
    return result.map(el => el * x);
    
    // let arr = new Array(n + 1).fill(x).map((el, idx) => {
    //     return idx * x;
    // });
    // return arr;
}