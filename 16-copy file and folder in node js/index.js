var fs = require('fs');
var path = require('path');

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

// calling
let source = "C:/Users/Sudip Pal/Downloads/c"
let target = "C:/Users/Sudip Pal/Desktop/batch/"
copyFolderRecursiveSync(source,target)