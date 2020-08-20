
const menuItens = document.querySelectorAll('.menu a')

function getScrollTopByHref(element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
 
      window.scroll({
      top: to,
      behavior: "smooth"
   })
   smoothScrollTo(0, to)

}

function scrollToIdOnClick(event) {
   event.preventDefault()
   const to = getScrollTopByHref(event.currentTarget) - 80
   scrollToPosition(to)
}

menuItens.forEach(item => {
   item.addEventListener('click', scrollToIdOnClick)
})
function enviar() {
   let nome = document.querySelector('#nome')
   let email = document.querySelector('#email')
   let conheceu = document.querySelector('#conheceu')
   let data = document.querySelector('#dtNasc')
   let estado = document.querySelector('#estado')

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || nome.value == '' || conheceu.value == '' || data.value == '' || estado.options[estado.selectedIndex].value == '') {
      alert('Preencha todos os campos antes de enviar o formulário!')
   } else {
      alert('Formulário enviado com sucesso!')
   }
}

function validaNome() 
{
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
    }else{
        txt.innerHTML = "Nome valido"
        txt.style.color = "green"
    
    }
}
function validaEmail()
{
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf('@') == -1){
            txtEmail.innerHTML = "E-mail invalido"
            txtEmail.style.color = "red"
        }else
        {
            txtEmail.innerHTML = "E-mail valido"
            txtEmail.style.color = "green"
        }
}  