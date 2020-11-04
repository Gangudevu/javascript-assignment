const p=100,q=200;

// 2 variable and one function
function sum(a,b,cb,cb1)
{
    console.log("Inside Sum Function ....")
    cb(a+b+100);
    cb1(a+100);
}

// 2 variable and one function
function div(x,y,cb1)
{
    console.log("Inside Div Function ....")
    cb1(x/y);
}

sum(p,q,function(sumresult){

    console.log("Inside Sum Callback Function ....")
    console.log(sumresult);

    var test = sumresult+100;

    console.log(test);
},function(t){
   
    console.log("Inside Sum second callback Function ....")
    console.log(t);

    div(t,2,(divresult)=>{

        console.log("Inside Div callback Function ....")
        console.log(divresult);

    })
},()=>{

},()=>{

},()=>{
    
});