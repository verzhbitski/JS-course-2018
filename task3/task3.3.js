function check_parentheses(str) {
    let parentheses = [];
    let opening = ['(', '[', '{'];
    let closing = [')', ']', '}'];

    for (let c of str) {
        if (opening.indexOf(c) >= 0) {
            parentheses.push(c);
        } else {
            let br = parentheses.pop();
            if (opening.indexOf(br) !== closing.indexOf(c)) {
                return false;
            }
        }
    }

    return parentheses.length === 0;
}