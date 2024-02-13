let a1:number=20;
let b1;
console.log(typeof a1,typeof b1)

let x:String|number ="raj"
x=50
console.log(x)

let y:any=65
y="ram";
y=true
console.log(typeof y)

let arr:number[]=[10,20,30,40,50]
console.log(arr)

let num:(number|String)[]=["ten",20,"thirty",40,"fifty"]
console.log(num)

let arr4:[Number,String,Number]=[10,"ram",30]
console.log(arr4)


let arr5:[Number,String|Number,any]=[10,50,true]
console.log(arr5)

function sum(a:number, b:number,c:number=20):void
{
    console.log(a+b+c)
}
sum(2,10)


enum days
{
    sunday,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
    saturday
}

console.log(days.thrusday)
console.log(days[1])


function dummy():never
{
throw Error
}


interface myobj{
    name:String
    age:number
    salary?:number
}

let obj:myobj={
    name:"Ram",
    age:26,
}


interface emp{
    name:String
    email:String
    phone?:number
}

interface emp2 extends emp
{
    salary:number
}

class Employee implements emp2{
   readonly name;
     salary;
    email;

    constructor(n:string,s:number,e:String)
    {
        this.name=n;
        this.salary=s;
        // Employee.salary=s;
        this.email=e;
    }
}

let xyz = new Employee("Raj",85000,"Raj@gmai.com")
let xyz1 = new Employee("Raj",85000,"Raj@gmai.com")

let emp1:emp={
    name:"Rahul",
    email:"rahulsaini3501@gmail.com",
    phone:8588901989
}

type x = number|String|boolean
let x1:x=23
type emp3={
    name:string,
    email:String,
    salary:number
}

let obj5 : emp3={
    name:"Rahul",
    email:"rahulsaini3501@gmail.com",
    salary:250000
}
type commonFun=(p:number,q:number)=>number
let sum2:commonFun=(a,b):number=>a+b;
let sub2:commonFun=(a,b):number=>a-b;
let mul2:commonFun=(a:number,b:number):number=>a*b;
let div2:commonFun=(a:number,b:number):number=>a/b;

// sum2(2,5)

function clicky(e:Event)
{
    console.log(e)
    // console.log(e.target.textContent)
    const btn = e.target as HTMLButtonElement
    console.log(btn.textContent)
}

function sum5<t>(x:t,y:t)
{
    console.log(typeof x,typeof y);
}

sum5<number>(2,3)
sum5<String>("hi ","Ram")

export namespace myfun{
   export  function sum5(a:number,b:number)
    {
        return a+b;
    }
}
console.log(myfun.sum5(2,3));


