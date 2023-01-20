const fs =  require('fs') /* Cannot find module 'D:\20_ES8新特性\async与await结合读取文内容.js' */
/* 
   readFile(path: fs.PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void
   Asynchronously reads the entire contents of a file.
*/
 
async function read() {
   let r2 = await readR2()
   let r3 = await readR3()
   console.log(r2);
   console.log(r3);
}
function readR2() {
   return new Promise((resolve,reject)=>{
        fs.readFile('../r2.md', (error, data) => {
            /* 
                toString(encoding?: BufferEncoding | undefined, start?: number | undefined, end?: number | undefined): string
            */
            // console.log(data.toString());
            resolve(data.toString())
        })
    })
}
function readR3() {
    return new Promise((resolve,reject)=>{
         fs.readFile('../r3.md', (error, data) => {
             resolve(data.toString())
         })
     })
 }

read()