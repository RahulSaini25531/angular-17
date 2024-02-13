arr=[2,3,5,8,7,9]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
for(let i of arr)
{
    console.log(i)
}
for(let i in arr)
{
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element)
});


const p =arr.map((i)=>
{
    console.log(i)
    return i%2==0
})
const q =arr.filter((i)=>
{
    console.log(i)
    return i%2==0
})
console.log(p)
console.log(q)

let obj ={
    name:"raj",
    age:20

}

function print(a,b)
{
    console.log(this.name,this.age,a,b)
}

print.call(obj,5,6)
print.apply(obj,[5,7])
let r=print.bind(obj)
console.log(r)
r()

fetch('https://dummyjson.com/recipes')
.then((res)=>console.log(res))
.then((data)=>console.log(data))


async function fetchData()
{
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    console.log(data)
}
fetchData()

class Iphone
{
   name;
   constructor(value)
   {
    this.name=value;
   }

   print ()
   {
    console.log(this.name)
   }
}

class Iphone2 extends Iphone
{
    constructor(name)
    {
        super(name)
    }
}
export default Iphone
export {Iphone2}