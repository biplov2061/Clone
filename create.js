let btn = document.getElementById("button");
let message1 = document.getElementById("message");
let email = document.getElementById("email1").value;
let pass = document.getElementById("password").value;
console.log(pass);

btn.addEventListener("click" , (e) =>{
    e.preventDefault();
    if((email !== '')||(pass !== ''))
        {
            message1.innerHTML ='';
            
        }
        else
        {
            message1.innerHTML = "**PLease fill the form**";
            message1.style.color = "red";
        }
   
      
});

