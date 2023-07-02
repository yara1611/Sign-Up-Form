pass = document.querySelector("input[name='pass']")
conpass = document.querySelector("input[name='conpass']")
mess=document.querySelector('#messageCPass')
var check = function() {
    if (pass.value ===
      conpass.value) {
      pass.style.border='1px solid green'
      conpass.style.border='1px solid green'
      mess.textContent=" "
      
    } else {
      pass.style.border='1px solid red'
      conpass.style.border='1px solid red'
      mess.textContent="Not matching"
    }
  }