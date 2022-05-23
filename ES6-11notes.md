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
* Map
    - ES6 提供了Map 数据结构， 它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当做键。 Map 也实现了 Iterator 接口，所以可以使用扩展运算符[...] 和 for...of 循环遍历。 Map 的属性和方法：     
        1. size 返回Map的元素个数
        2. set 增加一个新元素， 返回当前Map
        3. get 返回键名对象的值
        4. has 检测Map中是否包含某个元素，返回boolean 值
        5. clear 情况集合，返回undefined
        6. Map 类似于一个升级版的对象，其键名可以是任意类型，包括object 
* Class 
    - ES6 提供了更接近传统语言的写法，引入了 Class(类) 这个概念，作为对象的模板。 通过 class 关键字，可以定义类。 基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5也可以做到。 新的 class 写法只是让对象原型的写法更加清晰，更像面向对象编程的语法而已
    知识点：
        1. class 声明类
        2. constructor 定义构造函数初始化
        3. extends 调用父类
        4. super 调用父级构造方法
        5. static 定义静态方法和属性
        6. 父类方法可以重写


