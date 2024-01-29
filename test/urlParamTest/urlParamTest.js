const inputBox = document.getElementById("inputBox")
const text = document.getElementById("text")

//start
//hex and string functions
function stringtohex(str){
  let hex = "";
  for (let i = 0; i < str.length; i++){
      const charCode = str.charCodeAt(i);
      const hexValue = charCode.toString(16);
      hex += hexValue.padStart(2,"0")
  }
return hex
}
function hextostring(hex){
  let str = "";
  for (let i = 0; i < hex.length; i += 2){
      const hexValue = hex.substr(i,2);
      const decimalValue = parseInt(hexValue, 16);
      str += String.fromCharCode(decimalValue);
  }
return str;
}
//end

function updateText(textToWrite){
  const text = document.getElementById("toUpdate").innerHTML = textToWrite
}

function load(){
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const dataToWrite = urlParams.get("data")
  console.log(dataToWrite);
  dataToWrite = hextostring(dataToWrite)
  updateText(dataToWrite)
}//  ^from the internet 

// CODE STARTS HERE

//initial reading from the parameter and updating text accordingly
load()

//main loop
inputBox.onkeyup = function() {
  const url = './urlParamTest.html';
  const data = stringtohex(inputBox.value)
  updateText()
  load()
};
