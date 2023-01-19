// 1. 引入fs模块
const fs = require('fs')
// 2.调用方法读取文件
// fs.readFile('../readme.md',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());
// })

// 3.使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('../readme.md',(error,data)=>{
        console.log(data);
        if(error)  reject(error) 
        resolve(data )
    })
})
p.then(function(value){
    console.log('ok',value.toString());
}
,function(reason){
    console.error(reason);
})