// 1. 获取元素
const btn = document.querySelector('#liyi')
    // 2. 绑定监听事件
btn.onclick = function() {
    // 正常以前引入方法： import * as helo from "./hello.js"
    // 动态引入： 利用 improt() 函数，import()返回值是一个promise 对象，成功的值就是引入的模块。 
    import ('./hello.js').then(e => e.hello()) // 这一行代码就是动态引入模块

}