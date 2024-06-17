const form = document.getElementById('form-deposito')
const nomebeneficiario = document.getElementById('nome-beneficiario')
let formEvalido = false

function validanome(nomecompleto) {
    const nomecomoarray = nomecompleto.split(' ')
    return nomecomoarray.length >=2
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-conta')
    const mensagemSucesso = `montante de: <b>${valorDeposito.value}<b/> depositado para o cliente <b>${nomebeneficiario.value}<b/> - conta: <b>${numeroContaBeneficiario.value}<b/>`

    formEvalido = validanome(nomebeneficiario.value)
    if(formEvalido){
        const containerMensagemSucesso = document.querySelector('.success-message') 
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        nomebeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } else{
        nomebeneficiario.style.border = '1px solid red'
        const mensagemErro = document.querySelector('.error-message')
        mensagemErro.innerHTML = 'O nome não está completo'
        mensagemErro.style.display = 'block'
    }
})

nomebeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value)
    formEvalido = validanome(e.target.value)

    if(!formEvalido){
        nomebeneficiario.classList.add('error')
        nomebeneficiario.style = '1px solid red'
        const mensagemErro = document.querySelector('.error-message')
        mensagemErro.innerHTML = 'O nome não está completo'
        mensagemErro.style.display = 'block'
    } else{
        nomebeneficiario.style = ''
        mensagemErro.style.display = 'none'
    }
})