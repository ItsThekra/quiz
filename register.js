const username =  document.getElementById("username-input")
const email =  document.getElementById("email-input")
const password =  document.getElementById("password-input")
const submit = document.getElementById("submit")
const apiUrl = "https://682985166075e87073a6b427.mockapi.io/quiz/users"


submit.addEventListener("click", async(e) =>{
    e.preventDefault()
 if (username.value.length < 4){
    alert("Uaername should be more then 4 letters")
 } else if(password.value.length < 6){
    alert("password should be more than 6 letters")
 }else if(email.value.indexOf('@') === -1) {
    alert("email should be in this format = user@gmail.com")
}else{
    alert("create new account!")
    userPost()
}
// empty the fileds after sending the data
username.value = ""
email.value =""
password.value =""
})


async function userPost(){ 

//   const user = fetch(`${apiUrl}/username?=${username}`)
//     if(user.ok){
//         console.log(user)
//     }

    let response = await fetch(apiUrl , {
    
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    username: username.value,
    email: email.value,
    password: password.value
 })
 
 })

 let data = await response.json();
 console.log(data)
}

