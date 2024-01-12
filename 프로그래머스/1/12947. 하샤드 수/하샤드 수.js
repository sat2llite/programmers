function solution(x) {
    let arr = String(x).split("").map(Number);
    
    // do {
    //     arr.push(x % 10);
    //     x = Math.floor(x / 10);
    // } while (x > 0)
        
    console.log(x);
    console.log(arr);

    if ((x % arr.reduce((a, b) => a + b)) == 0) return true;
    else return false;
}