function solution(num_list) {
    // let arr = num_list.map((el) => {
    //     if(el % 2 == 0) { 
    //         // return arr.push(el.length);
    //         return "짝수";
    //     }
    //     else { 
    //         return "홀수"; 
    //     }
    //     for (let i=0; i<=el.length; i++) {
    //         return console.log("d");
    //     }
    // });
    // let a = arr.filter(item => "짝수" === item).length;
    // let b = arr.filter(item => "홀수" === item).length;
    // return [a, b];
    
    let a = num_list.filter(item =>  item%2 === 0).length;
    let b = num_list.filter(item => (item%2)-1 === 0).length;
    return [a, b];
}