
const regexEmail = /\S+@\S+\.\S+/

document.getElementById('form-login').addEventListener('mouseenter', (e) => {
    console.log('mouse sobre form hover')
})

document.querySelector('#form-login').addEventListener('mouseleave', (e) => {
    console.log('mouse caiu fora')
})

document.querySelector('#form-login').addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!regexEmail.test(email)) {
        return console.error('O Campo email precisa ser preemchido corretamente')
    }

    if (password.length < 6 || password.length > 10) {
        return console.error('O campo password precisa ser preenchido corretamente entre 6 a 10 caracteres')
    }

    console.log(email, password)
    console.log('Dados preenchidos com sucesso!')
})

