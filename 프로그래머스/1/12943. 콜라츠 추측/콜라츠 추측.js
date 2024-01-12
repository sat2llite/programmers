function solution(num) {
    let result = 0;
    let number = 0;
    
    while (num != 1) {
        if (result >= 500) {
            return -1;
            break;
        }
        
        else {
            if (num % 2 == 0) {
                number = num / 2;
                result++;
                num = number;

            } else {
                number = num * 3 + 1;
                result++;
                num = number;
            }
        }
    }
    return result;
}