function solution(hp) {
    const a = (hp / 5);
    const b = (hp % 5) / 3;
    const c = ((hp % 5) % 3) / 1;
    
    return Math.floor(a) + Math.floor(b) + Math.floor(c);
}