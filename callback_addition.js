
function res(result)
{
    console.log("res() function:"+result);
    
}

function add()
{
    let a=document.getElementById("num1").value;
    //console.log(a);
    let b=document.getElementById("num2").value;
    let c=parseInt(a)+parseInt(b);
    //console.log(`Addition of ${a} and ${b} is: ${c}`);
    
    document.getElementById("res").innerText=`Addition of ${a} and ${b} is :${c}`;

    document.getElementById("res").style.color="red";

    document.getElementById("res").style.backgroundColor="aqua";
    res(c);
}
