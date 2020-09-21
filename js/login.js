
const inputWrap = document.querySelector('.input_btn_warp')
const inputLabel = document.querySelector('.input_label');
const id = document.querySelector('.id_label input');
const password = document.querySelector('.password_label input');
const loginButton = document.querySelector('.login_btn');
const loginAction = document.querySelector('.login_action');


function ab() {

  if(id.value.length > 0) {
    inputLabel.className="input_label_move";
  } else {
    inputLabel.className="input_label";
  }
}

ab()

function focusLabel(value) {
  value.addEventListener('focus', function() {
    value.parentElement.classList.add('focus_color')
      value.parentElement.children[0].classList.remove('holder_set')
  })
  value.addEventListener('blur', function() {
    value.parentElement.classList.remove('focus_color')
    if(!value.value.length > 0) {
      value.parentElement.children[0].classList.add('holder_set')
    }
  })
  value.addEventListener('keyup', function() {
    console.log(id.value)
    console.log(password.value)
     if(id.value.length > 0 && password.value.length > 4) {
    loginButton.removeAttribute('disabled')
  } else if(!loginButton.hasAttribute('disabled') && id.value.length <= 7 && password.value.length <= 7) {
    loginButton.setAttribute('disabled', null)
  } else {
    loginButton.setAttribute('disabled', null)
  }
  })
}

inputWrap.addEventListener('submit', function(e) {
  e.preventDefault()
 if(id.value.includes('@')){
   location.href="main.html"
 } else {
   alert('이메일 양식을 지켜 작성해주세요')
   id.value = ''
   password.value = ''
 }
})


focusLabel(id)
focusLabel(password)