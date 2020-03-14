const { readFile, readFileSync } = require("fs");

const wordFinder = (fileList, word) => {
    let item = []
    fileList.forEach(directory => {
        const data = readFileSync(directory).toString()
        if(data.includes(word)) {
            item.push(directory)
        }
    })

    return item
}

module.exports = wordFinder;