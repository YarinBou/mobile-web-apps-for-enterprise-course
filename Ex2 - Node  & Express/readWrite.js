const fs = require('fs'); //File System

let fileToRead = process.argv[2];
let fileToWrite = process.argv[3];

fs.readFile(fileToRead, 'utf-8', (error, data) => {
    if (error) {
        throw error
    }
    let wStream = fs.createWriteStream(fileToWrite, {
        flags: 'a'
    })

    for (let i = data.length - 1; i >= 0; i--) {
        wStream.write(data[i])
    }
    wStream.close()
    console.log("Successfully Written to File.");
})