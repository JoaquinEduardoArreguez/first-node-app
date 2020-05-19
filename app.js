const fs = require("fs");
const tarea = require("./tarea");

console.log(tarea.getFilesInsidePath('./'));

tarea.printGetFilesInsidePath('./');

tarea.printSortedGetFilesInsidePath('./');

console.log(
    tarea.getFileStartsWithLetter('./','t')
);

console.log(
    tarea.getFileCountStartsWithLetter('./','t')
);