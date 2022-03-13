let password = document.querySelector('.senha')
password.style.border = "1px solid #6DC68B"

let icone = document.querySelector('.senhaIcone');
icone.style.cursor = "pointer"

function exibirSenha() {
  if(password.type == 'password') {
    password.type = 'text'
  }else {
    password.type = 'password'
  }
}
