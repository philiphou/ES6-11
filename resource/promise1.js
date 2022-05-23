   //  引入 fs 模块， 下面是回调地狱模式
   const fs = require("fs")

   //    fs.readFile('./咏柳.md', (err, data1) => {
   //        fs.readFile('./静夜思.md', (err, data2) => {
   //            fs.readFile('./归园田居.md', (err, data3) => {
   //                const result = data1 + data2 + data3 // 因为做了运算，会自动跳转成字符串格式，而不是buffer 格式
   //                console.log(result)
   //            })
   //        })
   //    })

   //     利用 Promise 封装，避免回调地狱： 

   const p = new Promise((resolve, reject) => {
       fs.readFile('./咏柳.md', (err, data1) => {
           resolve(data1);
       })
   }).then(value => {

       return new Promise((resolve, reject) => {

           fs.readFile('./归园田居.md', (err, data2) => {
               //    此时上面value 保存的是 data1 内容，此处我们合并到 data2 继续向下传递。
               resolve([value, data2]) // 这个resolve 就是向下传递数据的作用，并且以数组方式，把各个data 整合； 

           })
       })
   }).then(value => {
       return new Promise((resolve, reject) => {
           fs.readFile('./静夜思.md', (err, data3) => {
               // 合并 data3
               resolve([value, data3])
                   //    也可以利用压入： 

               // value.push(data3) resolve(value)

           })
       })
   }).then(value => {
       console.log("全部读取的结果是: " + value.toString())
   })