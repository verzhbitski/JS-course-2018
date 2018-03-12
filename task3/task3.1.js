function substring_number(str) {
    for (let i = str.length; i > 1; i--) {
        if (str.length % i === 0) {
            let sample = str.substr(0, str.length / i);

            if (str === sample.repeat(i)) {
                return i;
            }
        }
    }

    return 1;
}