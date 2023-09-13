const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// fs.writeFile('./docs/blog1.txt', 'Hello Worlds', () => {
//   console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello Worlds', () => {
//   console.log('file was written');
// });

//directory toggle
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  //deleting folder
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder has been deleted');
  });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
