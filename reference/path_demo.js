const path = require('path')


//Give you the whole path and file name
console.log(__filename);

//Give you the file name
console.log(path.basename(__filename))

//File Extension
console.log(path.extname(__filename))

//Create object of the path
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname, 'folderName','fileN ame.txt'))

