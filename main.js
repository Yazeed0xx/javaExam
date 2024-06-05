let url = "https://665736d49f970b3b36c8673a.mockapi.io/SignUp"
let nameAlert = document.getElementById("nameAlert")
   let userAlert = document.getElementById("userAlert")
   let passwordAlert = document.getElementById("passwordAlert")
   let emailAlert = document.getElementById("emailAlert")
    
   let emailRegax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
async function signupform(){
   let yourName = document.getElementById("yourName")
   let userName = document.getElementById("userName")
   let userEmail = document.getElementById("userEmail")
   let userPassword = document.getElementById("userPassword")
   

   
let isValid = true
if (yourName.value.length<3){
    nameAlert.innerText = "name Should be 3 chracter or more"
    nameAlert.setAttribute = "alert alert-danger"
    isValid= false

}if(userName.value.length<7){
    userAlert.innerText = "name Should at least one upper case"
    userAlert.setAttribute= " alert alert-danger"
    isValid= false

}

if(!emailRegax.test(userEmail.value)){
    emailAlert.innerText="Email should be vlied"
    emailAlert.setAttribute= "alert alert-danger"
    isValid= false
}if(userPassword.value.length<4){
    passwordAlert.innerText = "password Should be 4 number"
    passwordAlert.setAttribute= "alert alert-danger"
    isValid = false

}
if(isValid){
    try{const response= await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            yourName: yourName.value,
            userName: userName.value,
            userEmail: userEmail.value,
            userPassword: userPassword.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
    }
    catch(error){
        console.log('There was an error', error);




    }
   



      

}
window.location.href= "login.html"

    

}
async function loginform(){
    let userName = document.getElementById("userName")
    let userPassword = document.getElementById("userPassword")
let isValid= true
    if(userName.value.length<5){
        userAlert.innerText = "name Should be 3 chracter or more"
        userAlert.setAttribute= " alert alert-danger"
        isValid= false

    }
    if(userPassword.value.length<4){
        passwordAlert.innerText = "password Should be 4 number"
        passwordAlert.setAttribute= "alert alert-danger"
        isValid = false
    
    }
    if(isValid){
        try{const response= await fetch(url,{
            method: 'GET', })
            let data = response.find(d=>  d.userName=== userName.value && d.userPassword=== userPassword.value)
            .then((response) => response.json())
            .then((json) => console.log(json));
            
        }
        catch(error){
            console.log('There was an error', error);
    
    
    
    
        }
       
    
    
    
          
    
    }
    window.location.href= "home.html"

}
// async function clender(){
// // fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=44372c8870f8ef3c6c02b580b9b07acb')
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));

//   fetch('http://api.aladhan.com/v1/gToH/07-12-2014')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   clender.forEach(element => {
//     let div = document.cr
    
//   });
  


// }




//   clender()
