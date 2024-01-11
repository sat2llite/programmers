function solution(s) {
    let p = 0;
    let y = 0;
    let arr = String(s.toLowerCase()).split("");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "p") p++;
        else if (arr[i] == "y") y++;
    }
    
    if (p == y) return true;
    else return false;
}