//  1. 引入 fs 模块
const fs = require('fs')
    // 2.1 封装读取三个文件的异步操作：1） 读取 咏柳
function readYong() {
    return new Promise((resolve, reject) => {
        fs.readFile("./咏柳.md", (err, data) => {
            //  如果失败： reject(err)
            if (err) reject(err)
                // 如果成功
            resolve(data)
        })
    })
}
// 2.2 读取归园田居
function readGui() {
    return new Promise((resolve, reject) => {
        fs.readFile("./归园田居.md", (err, data) => {
            //  如果失败： reject(err)
            if (err) reject(err)
                // 如果成功
            resolve(data)
        })
    })
}
// 2.3 读取静夜思
function readJing() {
    return new Promise((resolve, reject) => {
        fs.readFile("./静夜思.md", (err, data) => {
            //  如果失败： reject(err)
            if (err) reject(err)
                // 如果成功
            resolve(data)
        })
    })
}

// 3. 上述三个函数返回结果均是 promise 对象，接下来声明一个 async 函数

async function main() {
    // 上面三个函数返回的是 promise 对象，可以前面加上 await;
    //  1. 获取咏柳内容：
    let yongLiu = await readYong() // readYong() 返回的对象是一个promise, 如果成功， promise 的值就是data,也就是我们读取的文件
        // 2. 获取归园田居
    let guiYuan = await readGui() // readYong() 返回的对象是一个promise, 如果成功， promise 的值就是data,也就是我们读取的文件
        // 3. 获取 静夜思内容
    let jingYe = await readJing() // readYong() 返回的对象是一个promise, 如果成功， promise 的值就是data,也就是我们读取的文件
    console.log(yongLiu.toString())
    console.log(guiYuan.toString())
    console.log(jingYe.toString())
}
// 4. 最后调用 main()
main()