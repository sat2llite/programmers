function solution(num_list) {
    return num_list.reduce((a, b) => {
        return num_list.length >= 11 ? a + b : a * b;
    });
}