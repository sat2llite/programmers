function solution(phone_number) {
    let arr = phone_number.split("").fill("*", 0, phone_number.length - 4);
    return arr.join("");
}