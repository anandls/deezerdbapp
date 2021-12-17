var unitlist = ["", "K", "M", "G"];
const formatNumber = (number) => {
    let sign = Math.sign(number);
    let unit = 0;
    while (Math.abs(number) > 1000) {
        unit = unit + 1;
        number = Math.floor(Math.abs(number) / 100) / 10;
    }
    return sign * number + unitlist[unit];
};

export { formatNumber };
