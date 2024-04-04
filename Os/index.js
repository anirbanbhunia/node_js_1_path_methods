const os = require('os')

console.log("CPU Architechure",os.arch()) //knowing my cpu architecture

console.log('free memory' , os.freemem()) //knowing my system freememory in bytes

console.log('total memory' , os.totalmem()) //knowing my system totalmemory in bytes

console.log('network interfaces', JSON.stringify(os.networkInterfaces())); //knowing my system network interfaces

console.log('Os default tempt path/dir:' ,os.tmpdir());//My Os default tempt path or directory

console.log('Endianess', os.endianness());

console.log('Hostname', os.hostname());//checking hostname

console.log('Os type', os.type());//My os type

console.log('Os platform', os.platform());//My os platform

console.log('Os relese', os.release());//My os relese date