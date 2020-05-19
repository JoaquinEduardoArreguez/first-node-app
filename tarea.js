const fs = require("fs");

/**
 * Consigna :
 * Create a method to get all the files inside a given path
 * Create a method to print all the files
 * create a method to sort and print the files
 * create a method to get the amount of files starting with one letter
 */

// Create a method to get all the files inside a given path
const getFilesInsidePath = (myPath) => fs.readdirSync(myPath);

// Create a method to print all the files
const printGetFilesInsidePath = (myPath) => console.log(getFilesInsidePath(myPath));  

// Create a method to sort and print the files in reverse order
const printSortedGetFilesInsidePath = (myPath) => {console.log(getFilesInsidePath(myPath).reverse());
};

// Create a method to get the amount of files starting with one letter
// La petición es ambigua, voy a hacer dos métodos:

// Retorna un array conteniendo los nombres de los files dentro de un array, que empiezan con
// la letra startingLetter recibida por parametro.
const getFileStartsWithLetter = (myPath,startingLetter) => {
    return getFilesInsidePath(myPath).filter( name => name.startsWith(startingLetter) );
};

// Retorna la cantidad de files cuyo nombre empiezan con
// la letra startingLetter recibida por parametro.
const getFileCountStartsWithLetter = (myPath,startingLetter) => { return (getFileStartsWithLetter(myPath,startingLetter)).length };

module.exports.getFilesInsidePath = getFilesInsidePath;
module.exports.printGetFilesInsidePath = printGetFilesInsidePath;
module.exports.printSortedGetFilesInsidePath = printSortedGetFilesInsidePath;
module.exports.getFileStartsWithLetter = getFileStartsWithLetter;
module.exports.getFileCountStartsWithLetter = getFileCountStartsWithLetter;
