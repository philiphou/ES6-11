# ============ ES 6-11 新特性学习 =========
# ============ ES6 到 ES11 新特性
* ES
    - ES 全称：EcmaScript， 是脚本语言的规范，而平时经常编写的 javascript 是EcmaScript的一种实现，所以ES 新特性其实指的是 Javascript 的新特性
    - 新特性：语法简洁，功能丰富，框架开发应用，前端开发职位要求
    - ECMAScript 是由ECMA 国际通过ECMA-262 标准化的脚本程序设计语言
    - ECMA-262 是其中一个由ECMA制定的标准。
* Symbol
    - ES6 引入了一种新的原始数据类型 symbol, 表示独一无二的值。 它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。
    - Symbol 特点： 
        1.  Symbol 的值是惟一的， 用来解决命名冲突的问题
        2. Symbol 的值不能与其他数据进行运算
        3. Symbol 定义的对象不能使用 for...in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象的所有键名；

* Set
    - ES6 提供了新的数据结构： Set(集合)， 它类似于数据，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用扩展运算符进行遍历， 集合的属性和方法： 
        1. size 返回集合的元素个数
        2. add 增加一个新的元素，返回当前结合
        3. delete 删除元素， 返回boolean 值
        4. has 检测集合中是否包含某个元素， 返回 Boolean 值
        
