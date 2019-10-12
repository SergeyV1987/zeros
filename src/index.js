module.exports = function zeros(expression) {

    let factArray = expression.split('*');
    let result;
    let resultTrimmed;


    function factorial1(n) {
        return (n !== 1) ? multiply(n, factorial1(n - 1)) : 1;
    }

    function factorial2(n) {
        return (n > 1) ? multiply(n, (factorial2(n - 2))) : 1;
    }

    function multiply(first, second) {
        let firstArray = first.toString().split('').reverse();
        let secondArray = second.toString().split('').reverse();
        let result = [];

        for (let i = 0; i < firstArray.length; i++) {
            for (let j = 0; j < secondArray.length; j++) {
                let m = firstArray[i] * secondArray[j];
                result[i + j] = (result[i + j]) ? result[i + j] + m : m;
            }
        }

        for (let i = 0; i < result.length; i++) {
            let num = result[i] % 10;
            let up = Math.floor(result[i] / 10);
            result[i] = num;
            if (result[i + 1]) {
                result[i + 1] += up;
            } else if (up != 0) {
                result[i + 1] = up;
            }
        }

        return result.reverse().join('');
    }

    factArray = factArray.map( (number) => {
        if (number[number.length - 2] !== "!") {
            let newNum = parseInt(number.slice(0, number.length-1));
            return factorial1(newNum);
        } else {
            let newNum = parseInt(number.slice(0, number.length-2));
            return factorial2(newNum)
        }
    });

    result = factArray.reduce(multiply).toString();

    resultTrimmed = result.replace(/0/g, ' ').trim();

    return result.length - resultTrimmed.length;
}

