function solution(s) {
    let regex = /^[0-9]+$/;
    s.split("");
    
    if (regex.test(s) && (s.length == 4 || s.length == 6)) {
        return true;            
    } else {
        return false;
    }
}