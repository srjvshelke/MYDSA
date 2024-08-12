var generate = function (numRows) {
    var ans = [];
    for (let i = 1; i <= numRows; i++) {
        let arr = [];
        for (let j = 1; j <= i; j++) {
            if (j == 1 || j == i) {
                arr.push(1)
            } else if (i > 2) {
                arr.push(ans[i - 1 - 1][j - 1 - 1] + ans[i - 1 - 1][j - 1]);

            }
        }
        ans.push(arr)
    }
};

let numRows = 10;
generate(numRows);

