const fs = require('fs');
const path = require("path");

let source = "C:/Users/Sudip Pal/Desktop/test1/h.jpg"
let destination = "C:/Users/Sudip Pal/Desktop/test2"
let baseItem = path.parse(source).base


// checking source item is file or folder
let fileType = CheckItemType(source);
// console.log("filetype is ", fileType);

// changing the destination path according to file or folder
destination = destinationPath(destination, baseItem)


///// Taking decision based on file and folder ///////////////////
if (fileType === "file") {
  copyOneFile(source, destination)
}else{
  let target = destination;
  copyFolderRecursiveSync(source, target)
}


function destinationPath(destination, base) {
  if (fileType === "file") {
    destination = `${destination}/${base}`
    return destination
  } else {
    return destination
  }
}

function CheckItemType(source) {
  let sourceItem = path.parse(source)
  // console.log(sourceItem)
  if (sourceItem.ext) {
    console.log("source item is file");
    return "file"
  } else {
    console.log("source item is folder")
    return "folder"
  }
}

function copyOneFile(source, destination) {
  fs.copyFile(source, destination, (error) => {
    console.log(error);
    console.log("file copied successfully");
  })
}

function copyFolder(source, destination, baseItem) {
  let items = fs.readdirSync(source)
  // console.log(items,typeof(items),Array.isArray(items))
  items.map((value) => {
    // console.log(value)
    copyOneFile(source, destination)
  })
}


//////////// copy folder from internet    ////////

function copyFileSync( source, target ) {

  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if ( fs.existsSync( target ) ) {
      if ( fs.lstatSync( target ).isDirectory() ) {
          targetFile = path.join( target, path.basename( source ) );
      }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}
function exist(targetFolder){
  if ( !fs.existsSync( targetFolder ) ) {
    fs.mkdirSync( targetFolder );
}
}

function copyFolderRecursiveSync( source, target ) {

  
  var files = [];

  // Check if folder needs to be created or integrated
  var targetFolder = path.join( target, path.basename( source ) );
 

  // Copy
  if ( fs.lstatSync( source ).isDirectory() ) {
    exist(targetFolder)
      files = fs.readdirSync( source );
      files.forEach( function ( file ) {
          var curSource = path.join( source, file );
          if ( fs.lstatSync( curSource ).isDirectory() ) {
              copyFolderRecursiveSync( curSource, targetFolder );
          } else {
               copyFileSync( curSource, targetFolder );
               console.log('folder was copied to destination');
          }
      } );
  }else{
    fs.copyFile(source, target, (err) => {
      console.log(err)
      console.log('File was copied to destination');
    });
  }
}


