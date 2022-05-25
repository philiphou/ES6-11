// 统一暴露
let school = "尚硅谷";

function findJob() {
    console.log("we all get a job");
}

//  此处统一暴露： 语法： 利用object 封装需要暴露的内容；

export { school, findJob };