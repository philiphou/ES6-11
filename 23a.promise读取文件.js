 //原生读取： 引入 fs 模块
 const fs = require('fs')

 //     //  调用方法读取文件
 // fs.readFile('./resource/1.咏柳.md', (err, data) => {
 //     // 如果失败，则抛出错误
 //     if (err) throw err;
 //     //  如果成功，输出内容
 //     console.log(data) // 输出的是一个 Buffer
 //         // 为了读取内容，调用 .toString() 方法
 //     console.log(data.toString())
 // }) 

 //  使用 Promise 封装

 const p = new Promise(function(resolve, reject) {
     //  封装一个异步的操作： 
     fs.readFile('./resource/1.咏柳d.md', (err, data) => {
         //  如果失败， 调用 reject(err)，同时自动修改了promise 的状态，变成 失败
         if (err) reject(err)
             //如果成功 调用 resolve(data); 同时自动修改了promise 的状态，变成 成功
         resolve(data)
     })

 })
 p.then(function(value) { console.log(value.toString()) }, function(reason) { console.log("读取失败") })