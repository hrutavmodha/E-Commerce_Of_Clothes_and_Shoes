const email = document.getElementById('email')
const password = document.getElementById('password')
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email.value,
        password: password.value
    })
}).then((res) => {
    return res.json()
}).then((data) => {
    alert(data.message)
}).catch((err) => {
    alert('An error occurred. Please try again.')
    console.error(err)
})