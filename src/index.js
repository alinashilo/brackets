module.exports = function check(str, bracketsConfig) {
    let stack = [], map = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        map[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === map[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.length <= 0
};
