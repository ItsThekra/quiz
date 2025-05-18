const username =  document.getElementById("username-input")
const password =  document.getElementById("password-input")
const submit = document.getElementById("submit")
const apiUrl = "https://682985166075e87073a6b427.mockapi.io/quiz/users"

submit.addEventListener("click", async(e)=>{
    e.preventDefault()

})

async function checkUser(item) {
    const user = fetch(`${apiUrl}/username?=${username.value}`)
    if(user.ok){
        console.log(user)
    }

 let data = await checkUser.json();
 console.log(data)
}