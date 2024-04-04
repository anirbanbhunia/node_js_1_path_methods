const fs = require('fs');
//read a file
//Async way to read file
// console.log('read start')
// fs.readFile('input.txt',(err,data) => {
//     if(err){
//         console.log('error is',err)
//         return err
//     }else{
//         console.log('data is',data.toString())
//         console.log('read end')
//         return data
//     }
// })
// console.log('other')

// //syncronous way to read file
// const data = fs.readFileSync('input.txt')
// console.log('start2');
// console.log('data from syncronous way',data.toString())
// console.log('other2')

//another way to read file or read file in low level

//flags:-
//r	Open file for reading. An exception occurs if the file does not exist.
// r+	Open file for reading and writing. An exception occurs if the file does not exist.
// rs	Open file for reading in synchronous mode.
// rs+	Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
// w	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// wx	Like 'w' but fails if path exists.
// w+	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
// wx+	Like 'w+' but fails if path exists.
// a	Open file for appending. The file is created if it does not exist.
// ax	Like 'a' but fails if path exists.
// a+	Open file for reading and appending. The file is created if it does not exist.
// ax+	Like 'a+' but fails if path exists.

// const buf = new Buffer(1024) //1024 is the size

// fs.open('input.txt','r+',function(err, fd){
//     if(err){
//         console.log('Error in opening',err)
//     }
//     console.log('file open successfully');
//     //previously how i open a file after that we read the file
//     fs.read(fd, buf,0, buf.length, 0, function(er,bytes){//bytes is the number of bytes read from the file
//         if(er){
//             console.log('error in reading file is');
//         }
//         console.log('bytes are:',bytes);
//         console.log('data is',buf.slice(0,bytes).toString())

//         //in high level it is automaticly close but in case of low level you close manually example in below
//         fs.close(fd,(e)=>{
//             if(e){
//                 console.log('Error in closing file')
//             }
//             console.log('Successfully closing file');
//         })
//     })
    //fb is the reference
    //after i read the file buf is that space where i keep store that file
    // offset: This is the offset within the buffer where the data will be written. For example, if offset is 0, the data will be written starting from the beginning of the buffer.
    //fourth length: This parameter indicates the number of bytes to read from the file.
    //fifth is witch position we should start read, i start from start so i gave it 0.
    //last is callback which give the bytes or error
//})

//Write to a file

//Async way
// fs.writeFile('input.txt','full stack developer' ,(err)=>{ //writing content in input.txt is 'full stack developer' , and preveous content in input.txt is replace with 'full stack developer' 
//     if(err){
//         console.log('error in writing file');
//     }else{
//         console.log('success in writing file');
//     }
// })

//previously we replace content but in this case we add data not replacing data
//Append to file in Async way

// fs.appendFile('input.txt','--I am anirban bhunia based in tamluk','utf8',(err)=>{
//     if(err){
//         console.log('error in appending file');
//     }else{
//         console.log("Successfully Appended");
//     }
// })

//Deleting file in Async way

fs.unlink('input.txt',(err)=>{
    if(err){
        console.log('error in deleting file');
    }
   console.log("Success in deleting file");
})

//After deleting input.txt file is deleted

