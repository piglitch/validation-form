let checkVal = "";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault()

  const validMail = document.querySelector(".email").value
  const leftOut = [];
  for (let i = 0; i < 5; i++) {
    checkVal =  document.querySelectorAll("input")[i].value + checkVal 
    if (document.querySelectorAll("input")[i].value === "") {
      leftOut.push(document.querySelectorAll("input")[i].value)
    }
  }  
  if (leftOut[0] == undefined && emailRegex.test(validMail) === true) {
    window.alert("Submitted successfully!!!")
    console.log(leftOut)
    return
  }else{ 
  window.alert("Please fill up the highlighted fields")
  console.log(leftOut)
  console.log(leftOut[0])
  }
})


