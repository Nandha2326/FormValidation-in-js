function Validate(){
    const form = document.querySelector("form")
    form.addEventListener('submit',e =>{
        e.preventDefault();
       checkInputs();
    })
}
function checkInputs(){
    const namevalue = document.querySelector(".name");
    const emailvalue = document.querySelector(".email");
    const passwordvalue = document.querySelector("#password");
    const password2value = document.querySelector("#password2");

    const name =namevalue.value.trim();
    const email =emailvalue.value.trim();
    const password =passwordvalue.value.trim();
    const password2 =password2value.value.trim();
    if(name==""){
        document.querySelector(".first").innerHTML="Please Enter Your Name !!";
        document.querySelector(".name").style.border="2px solid red";
    }
    else{
        document.querySelector(".first").innerHTML="";
        document.querySelector(".name").style.border="2px solid green";
    }
    const ma = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
       
        document.querySelector(".mail").innerHTML="Please Enter Your email !!";
        document.querySelector(".email").style.border="2px solid red";
    }
    else if(!ma.test(email)){
       
        document.querySelector(".mail").innerHTML="Please Enter Your valid email !!";
        document.querySelector(".email").style.border="2px solid red";
    }
    else{
        document.querySelector(".mail").innerHTML="";
        document.querySelector(".email").style.border="2px solid green";
    }
    if(password==""){
        document.getElementById("pass").innerHTML="Please Enter Your password !!";
        document.getElementById("password").style.border="2px solid red";
        } 
        else{
        document.getElementById("pass").innerHTML= "";
        document.getElementById("password").style.border="2px solid green";
        }
        
    if(password2==""){
        document.getElementById("cpass").innerHTML="Please Enter Your Confirm password !!";
        document.getElementById("password2").style.border="2px solid red";
        }
        else if(password!=password2){
        document.getElementById("cpass").innerHTML="password doesn't match !!";
        document.getElementById("password2").style.border="2px solid red";
        }
        else{
        document.getElementById("cpass").innerHTML= "";
        document.getElementById("password2").style.border="2px solid green";
        }
}