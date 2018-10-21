import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number
    ){}
}
const courses = [
    new Course(1,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    23,100),
    new Course(3,'测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    30,99)
]
export class Shequ{
    constructor(
        public id:number,
        public touxiang:string,
        public courseName:string,
        public images:string, 
        public person:number,
        public personName:string,
        public text:string,
        public pinglun:number
    ){}
}

const shequs=[new Shequ(1,"http://www.edu2act.net/static/img/m.png",
"web开发二","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg"
,123,"刘秀梅","一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。",4),
new Shequ(2,"http://www.edu2act.net/static/img/m.png",
"类定义关键字详解","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg"
,123,"3-张馨元","JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用",0),
new Shequ(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg",
"一个java文件中可包含多个main方法","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg"
,123,"3-张馨元","一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能",2),
new Shequ(4,"http://www.edu2act.net/static/img/m.png",
"数据结构——线性表的经典应用","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg"
,123,"杨伟斌","1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一。",4)
];


export class Course1{
    constructor(
        public id:number,
        public courseName:string,
        public images:string, 
        public task:number,
        public person:number,
        public text:string,
        public src:string
    ){}
}

const courses1 = [
    new Course1(1,'Github 开源',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    10,90,"完成本课程之后你能达到以下目标：实名注册Github账户-能够在上搜索资料","http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Course1(2,'CSS3边框',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    23,100,"完成本课程之后你能达到以下目标：实名注册Github账户-能够在上搜索资料","http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4"),
    new Course1(3,'地理位置定位',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    15,97,"完成本课程之后你能达到以下目标：实名注册Github账户-能够在上搜索资料","http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
    new Course1(4,'承前启后',
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    30,99,"完成本课程之后你能达到以下目标：实名注册Github账户-能够在上搜索资料","http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4")
]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses1',(req,res)=>{
    res.json(courses1);
});
app.get('/api/shequs',(req,res)=>{
    res.json(shequs);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.get('/api/shequs/:id',(req,res)=>{
    res.json(shequs.find((ele)=>ele.id == req.params.id));
});
app.get('/api/courses1/:id',(req,res)=>{
    res.json(courses1.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.listen(8000);