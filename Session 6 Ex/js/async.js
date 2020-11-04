function display1()
{
    console.log("Hello All");
}

function display2()
{
    console.log("Good Bye !!!!");
}

function display3()
{
    console.log("Hello Again !!!!");
}

display1();

setTimeout(() => {

    display2();
    
},3000);

display3();