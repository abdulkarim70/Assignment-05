const userName=document.getElementById('user-name');
const userPassword=document.getElementById('user-password');
const signinBtn=document.getElementById('sign-in');
signinBtn.addEventListener('click', function(){
    const userNameValue=userName.value
    const userPasswordValue=userPassword.value
if(userNameValue==="admin" && userPasswordValue==="admin123"){
    alert('login Success')
    window.location.assign("issue.html")
}
else{
    alert('Invalid User Name or Password')
    return
}

})