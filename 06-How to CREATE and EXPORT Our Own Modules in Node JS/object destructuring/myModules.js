// our module
// exporting multiple things

const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}

const name = "sudip pal";

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;
// we will apply object destructuring here 
module.exports = {add, sub, name}





