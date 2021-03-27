const path = require('path');

console.log("File Name")
console.log(__filename);
console.log();

//todo Base File Name
console.log("Base Name");
console.log(path.basename(__filename));
console.log();


//todo Directory Name
console.log("Directory Name");
console.log(path.dirname(__filename));
console.log();

//todo Extension Name
console.log("Extension Name");
console.log(path.extname(__filename));


//todo Path Object
console.log()
console.log("IMP  Path Object");
console.log(path.parse(__filename))
console.log("access anything from that object");
console.log(path.parse(__filename).base)
console.log()

//todo Concatenate paths
// First parameter directoryName,
// Second parameter new FolderName,
// Third parameter newFileName
// Note that this doesn't create a new File
// only creates a path nothing else

console.log(path.join(__dirname,'test','hello.html'));