const path = require("path")
console.log(path.sep) // in windows it is "\" in mac or linux it is "/"

console.log(process.env.PATH) // in windows it is ";" in mac or linux it is ":"

console.log(path.delimiter)

const filePath1 = '/public_html/home/index.html'

const currFilePath = __filename //current file path
console.log(__dirname)//current directory name
let basename = path.basename(currFilePath)
console.log(basename) //current file name

let basenameWithoutExtention = path.basename(currFilePath,'.js')//current file name without extension
console.log(basenameWithoutExtention)

let dirname = path.dirname(currFilePath)
console.log(dirname);

console.log(path.extname(currFilePath));//extension name
console.log(path.extname('index.md.js'));

let pathtoFile = path.format({
    dir:'public_html/home',
    base:'index.html'
})
console.log(pathtoFile) //combine this path

//all paths that are start from the root are called is absulute path
//those paths thats are not start from root are called relative path
//how the the path type:-
console.log(path.isAbsolute(currFilePath))
console.log(path.isAbsolute('/node.js'))
console.log(path.isAbsolute('./node.js'))

//join multyple path
let pathDir = path.join('/home','js','dist','index.js')
console.log(pathDir);

//break path part by part
console.log(path.parse(currFilePath))

//find two file relative
console.log(path.relative('/home/user/config','/home/user/js'));

console.log(path.resolve()); //find path directory

console.log(path.normalize('//home//user//js'))//create path in normalize form