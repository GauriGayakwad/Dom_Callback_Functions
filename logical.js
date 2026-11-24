console.log("Logical Tasks");

function Evenodd(){

    
    alert("Evenodd() function");

    let number=document.getElementById("number").value;
    if(number%2==0)
    {
        console.log("Number is Even:"+number);
    }else{
        console.log("Number is Odd:"+number); 
    }
    //Evenodd();
}

function Prime()
{
    alert("Prime() function");

    let number=document.getElementById("number").value;

    let count=0;

    if(number<=1)
    {
        console.log("not prime");
        
    }else{
    for(let i=1; i<=number; i++)
    {
        if(number%i==0){
            count++;
            
        }
    }
    if(count==2)
    {
        console.log("Prime Number");
    }else{
        console.log("Not Prime");
        
    }
}

}


function Reverse()
{
    alert("Reverse() function");
    let string=document.getElementById("text").value;

    let rev="";

    for(let i=string.length-1; i>=0; i--)
    {
        rev=rev+string[i];
    }
console.log("Reverse is:"+rev);
}

function Palindrome()
{
    alert("Palindrome() function");

    let string=document.getElementById("text").value;

    let rev="";

    for(let i=string.length-1; i>=0; i--)
    {
        rev=rev+string[i];
    }
    if(string==rev)
    {
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
}   

    function vowel(){
        alert("Vowels() function");

        let str =document.getElementById("text").value;

        let count=0;

        for(let i=0; i<str.length; i++)
        {
            if(str[i]=='a' || str[i]=='e'|| str[i]=='i' || str[i]=='o' || str[i]=='u')
            {
                count++;
            }
        }
        console.log("Total Vowels:"+count);
    }

    function Consonents(){
        alert("consonent() function");

        let str =document.getElementById("text").value;

        let count=0;

    
        for(let i=0; i<str.length; i++)
        {
            if(str[i]=='a' || str[i]=='e'|| str[i]=='i' || str[i]=='o' || str[i]=='u')
            {
                
            }else{
                count++;
            }
        }
        console.log("Total consonents:"+count);
    }


    function lightmode()
    {
        alert("lightmode() function");

         document.getElementById("div").style.color="black";

          document.getElementById("div").style.backgroundColor="white";
    }

    
    function darkmode()
    {
        alert("darkmode() function");

         document.getElementById("div").style.color="white";

          document.getElementById("div").style.backgroundColor="black";
    }