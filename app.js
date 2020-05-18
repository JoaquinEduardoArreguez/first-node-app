const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

let pathObject = path.parse(__filename);

logger.log("path", pathObject);

let freeMem = os.freemem();
let totalMem = os.totalmem();

// console.log('free',freeMem);
// console.log('total',totalMem);

logger.log("free", freeMem);
logger.log("total", totalMem);

let rootDir = fs.readdirSync('./');

console.log('sync',rootDir);


fs.readdir('./', (err,files) => {
    (err) ? console.log(err) : console.log('async',files);
     
    
} );