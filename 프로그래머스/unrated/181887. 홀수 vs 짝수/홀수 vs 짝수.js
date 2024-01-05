function solution(num_list) {
    let odd = [];
    let even = [];
    
    num_list.map((el, index) => {
        index % 2 == 0 ? odd.push(el) : even.push(el);
    });
    
    let oddSum = odd.reduce((a, b) => a + b)
    let evenSum =  even.reduce((a, b) => a + b)
    
    return Math.max(oddSum, evenSum);
}