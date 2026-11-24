console.log("Document object model");

function add(){
    alert("add() function");

    let a=document.getElementById("num1").value;
    console.log(a);
    let b=document.getElementById("num2").value;
    let c=parseInt(a)+parseInt(b);
    console.log(`Addition of ${a} and ${b} is :${c}`);

    document.getElementById("res").innerText=`Addition of ${a} and ${b} is :${c}`;

    document.getElementById("res").style.color="red";

    document.getElementById("res").style.backgroundColor="aqua";
    
    
}

function sub(){
    alert("sub() function");

    let a=document.getElementById("num1").value;
    console.log(a);
    let b=document.getElementById("num2").value;
    let c=parseInt(a)-parseInt(b);
    console.log(`Subtraction of ${a} and ${b} is :${c}`);

    document.getElementById("res").innerText=`Subtraction of ${a} and ${b} is :${c}`;

    document.getElementById("res").style.color="red";

    document.getElementById("res").style.backgroundColor="aqua";
    
    
}

function mul(){
    alert("mul() function");

    let a=document.getElementById("num1").value;
    console.log(a);
    let b=document.getElementById("num2").value;
    let c=parseInt(a)*parseInt(b);
    console.log(`Multiplication of ${a} and ${b} is :${c}`);

    document.getElementById("res").innerText=`Multiplication of ${a} and ${b} is :${c}`;

    document.getElementById("res").style.color="red";

    document.getElementById("res").style.backgroundColor="aqua";
    
    
}

function div(){
    alert("div() function");

    let a=document.getElementById("num1").value;
    console.log(a);
    let b=document.getElementById("num2").value;
    let c=parseInt(a)/parseInt(b);
    console.log(`Division of ${a} and ${b} is :${c}`);

    document.getElementById("res").innerText=`Division of ${a} and ${b} is :${c}`;

    document.getElementById("res").style.color="red";

    document.getElementById("res").style.backgroundColor="aqua";
    
    
}