const preSchoolSum = (num1, num2) => {
    let result = num1 + num2;
    if (result < 0) return 0;
    if (result > 10) return "sok";
    return Math.floor(result);
};

module.exports = preSchoolSum;