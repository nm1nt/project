const userInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const repasswordInput = document.querySelector('#repassword')


function handleSignUp() {
    const usernameValue = userInput.value
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    const repasswordValue = repasswordInput.value

    if (
        emailValue.length >= 10 && emailValue.includes('@') && passwordValue.length >= 6 && passwordValue == repasswordValue

    ) {
        localStorage.setItem(
            'userInfo',
            JSON.stringify({
                username: usernameValue,
                email: emailValue,
                password: passwordValue
            })
        )
        alert('Sign up success')
        window.location.href='main2.html'
        
    }else{
        alert('Sign up fail')
    }
}