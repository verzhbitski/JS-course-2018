function bin_to_dec(binary) {
    for (let char of binary) {
        if (char !== '0' && char !== '1') {
            return undefined;
        }
    }

    return binary.split('').reverse().reduce(function (acc, value, index) {
        return acc + value * Math.pow(2, index);
    }, 0);
}