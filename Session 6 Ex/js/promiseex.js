const p=100,q=200;

// 2 variable and one function
function sum(a,b)
{
    return new Promise((resolve,reject)=>{
        const result = a+b;
        resolve(result);
    })
}

// 2 variable and one function
function div(x,y)
{

}

const promiseobj = sum(p,q);

promiseobj.then((sumresult)=>
{
    console.log("Test Data ..."+sumresult);
})

sum(12,13)
.then((res)=>{
    console.log(res);
    return res + 100;
}).then((resdata)=>{
  console.log(resdata);
  return resdata/2;
})
.then((finaldata)=>{
    console.log(finaldata);
})
.catch((err)=>{
    console.log(err);
})