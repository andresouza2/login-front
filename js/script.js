function exibirSenha() {
  let password = document.querySelector('.senha')
  console.log(password.value)

  if(password.type == 'password') {
    password.type = 'text'
  }else {
    password.type = 'password'
  }
}