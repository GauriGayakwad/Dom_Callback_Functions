function m1(city)
{
    console.log("m1() function:"+city);
}

function m2(callback)
{
    console.log("m2() function");
    let city="PUNE";

    callback(city);   //m1 function call
}

m2(m1);   //callback function


function msg()
{
    console.log("HELLO");
}
setTimeout(msg,2000);