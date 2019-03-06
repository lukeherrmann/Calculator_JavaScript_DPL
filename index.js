var numButt = document.getElementsByTagName("button");
var actButt = document.getElementsByTagName("action");
var funcButt = document.getElementsByTagName("function");

var numberOne = []
var numberTwo = []
var smoothOpt = []
var equalSign = []

var count = 0

function callButt() {
  var outPut = document.getElementById("output")
for (i = 0; i < numButt.length; i++){
    numButt[i].addEventListener("click", function() {
      outPut.innerHTML = this.innerHTML
      numberOne.push(this.innerText)
      outPut.innerHTML = numberOne.join("")
      if (this.innerHTML == "AC"){
        outPut.innerHTML = ""
        numberOne = []
      } else if (this.innerHTML == "="){
        numberOne = numberOne.join('')
        var outcome = eval(numberOne)
        console.log(outcome)
      }
   })
  }
}

function operateButt(text) {
}



callButt()