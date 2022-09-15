function validateemail()  
{  
var x=document.form.gemail.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  
function validateuname(){  
    var usname=document.form.uname.value.required;  
    var password=document.myform.password.value;  
      
    if (usname==null || usname==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }
}  
      function confirmPass(){  
        var firstpassword=document.form.spass.value;  
        var secondpassword=document.form.cpass.value;  
          
        if(firstpassword!=secondpassword){  
        let ele=document.getElementById("hello").innerText="Invalid Password";  
        }  
        } 
    document.onkeyup=function(e){
        if(e.ctrlKey && e.which == 77){
            var element=document.body;
            element.classList.toggle("dark-mode");
        }
    }
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }