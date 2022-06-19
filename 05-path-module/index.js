// path module

const path = require("path");

//extension
// console.log(path.extname("H:/STUDY/Web Development/Node js/All application node.js/05-path-module/index.js"))
// parse give use root extension ans some more details.
// console.log(path.parse("H:/STUDY/Web Development/Node js/All application node.js/05-path-module/index.js"));

// if we wnat only name of the file
console.log(path.parse("H:/STUDY/Web Development/Node js/All application node.js/05-path-module/index.js").name);


