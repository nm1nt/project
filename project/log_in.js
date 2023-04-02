const userLogin = document.querySelector('#loginUsername')
const passwordLogin = document.querySelector('#loginPassword')

function handleLogin() {
    event.preventDefault()
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    

    if(userLogin.value === userInfo.username && passwordLogin.value === userInfo.password){
        alert('Login success!')
        window.location.href='main2.html'
    }else{
        alert('Login fail!')
    }
}