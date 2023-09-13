const fs = require('fs');

const writeStream = fs.createWriteStream('./docs/blog4.txt');
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//   console.log('------NEW CHUN------');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUKN\n');
//   writeStream.write(chunk);
// });

//piping read to write stream transfers read stream to write stream so blog3 to 4
readStream.pipe(writeStream);
