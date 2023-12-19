function solution(sides) {
    let result;
    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] <= sides[2]) {
        return 2;
    } else return 1;
    return sides;
}