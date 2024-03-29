const fs = require("fs")

const readFileLines = filename =>
    fs
        .readFileSync(filename)
        .toString('UTF-8')
        .split('\n')

let arr = readFileLines("usrsearch/urls.txt")
console.log(arr)