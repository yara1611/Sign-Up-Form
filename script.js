pass = document.querySelector("input[name='pass']")
conpass = document.querySelector("input[name='conpass']")
var check = function() {
    if (pass.value ===
      conpass.value) {
      pass.style.border='1px solid green'
      conpass.style.border='1px solid green'
      
    } else {
      pass.style.border='1px solid red'
      conpass.style.border='1px solid red'
      
    }
  }