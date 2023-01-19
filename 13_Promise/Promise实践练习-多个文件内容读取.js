const fs = require('fs')
const { resolve } = require('path')
// fs.readFile('../r1.md', (error, data1) => {
//     fs.readFile('../r2.md', (error, data2) => {
//         fs.readFile('../r3.md', (error, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3
//             console.log(result.toString());
//         })
//     })
// })

//  使用Promise实现
const p = new Promise(resolve => {
    fs.readFile('../r1.md', (error, data) => {
        resolve(data)
    })
}, reject => {

}).then(value => {
    /* 注意要return */
    return new Promise(resolve => {
        fs.readFile('../r2.md', (error, data) => {
            // resolve([value.toString(),data])
            resolve(value.toString() + '\r\n' + data)
        })
    }, reject => {

    })
}, reason => {

}).then(value => {
    return new Promise(resolve => {
        fs.readFile('../r3.md', (error, data) => {
            // console.log([value.toString(),data.toString()]);
            console.log(value.toString() + '\r\n' + data.toString());
            resolve([value, data])
        })
    }, reject => {

    })
}, reason => {

})