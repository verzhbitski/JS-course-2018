let words = {};

function process_line(str) {
    str.split(' ').forEach((word) => words[word] = words[word] === undefined ? 1 : words[word] + 1);
}

function find_max() {
    let values = Object.values(words);
    let keys = Object.keys(words);
    values = values.sort().reverse();
    let max_count = values[0];
    let max_words = [];

    keys.forEach(function (key) {
        if (words[key] === max_count) {
            max_words.push(key);
        }
    });

    if (max_words.length > 1) {
        console.log('---');
    } else {
        console.log(max_words[0]);
    }
}

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line', (input) => {
    if (input.length !== 0) {
        process_line(input);
    } else {
        rl.close();
        process.stdin.destroy();
        find_max();
    }
});