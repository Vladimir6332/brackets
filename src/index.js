module.exports = function check(str, bracketsConfig) {
    let difBrackets = {};
    let sameBrackets = {};
    let strArr = str.split('');
    let startIndex;
    let simpleBrackets = [];

    // create configs different and same brackets
    bracketsConfig.forEach((val, index, arr) => {
        if (val[0] === val[1]) sameBrackets[val[0]] = val[0]
        else difBrackets[val[1]] = val[0];
    });

    // check simple brackets
    let checkSimpleBrackets = function (arr) {
        if (arr.length === 0) return true;
        if (arr.length === 1) return false;
        for (let i = 0; i < arr.length; i++) {
            if (sameBrackets[arr[i]] && arr[i] === arr[i + 1]) {
                arr.splice(i, 2);
                if (i === 0) i = -1
                else i -= 2;
            };
        };
        if (arr.length === 0) return true
        else return false;
    };

    // check different brackets
    for (let i = 0; i < strArr.length; i++) {
        if (difBrackets[strArr[i]]) {
            startIndex = strArr.lastIndexOf(difBrackets[strArr[i]], i);
            if (startIndex < 0) return false;
            simpleBrackets = strArr.splice(startIndex, i - startIndex + 1).slice(1, -1);
            if (!checkSimpleBrackets(simpleBrackets)) return false;
            i = startIndex - 1;
        };
    };

    if (checkSimpleBrackets(strArr)) return true;
    return false;
};
