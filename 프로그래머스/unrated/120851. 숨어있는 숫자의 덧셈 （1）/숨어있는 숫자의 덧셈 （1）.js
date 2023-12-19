function solution(my_string) {
    // let result = 0;
    let arr = my_string.split("").map(Number).filter((el) => el);
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i];
    // }
    // return result;

    let result = arr.reduce((a, b) => a + b)
    return result;
}