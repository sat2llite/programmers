function solution(my_strings, parts) {
   let result = [];
    for (let i = 0; i < my_strings.length; i++) {
        result.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1));
    }
    return result.join("");
    
    // for (let i = 1; i <= 10; i++) {
    //     result.push(i);
    // }
    // console.log(result.join(""));
    
    // console.log(my_strings[0].slice(parts[0][0], parts[0][1] + 1));
    // console.log(my_strings[1].slice(parts[1][0], parts[1][1] + 1));
    // console.log(my_strings[2].slice(parts[2][0], parts[2][1] + 1));
    // console.log(my_strings[3].slice(parts[3][0], parts[3][1] + 1));
    
    // return arr;
}