
const url = new URL("https://miko1034.github.io/paste/paste.html");
const params1 = new URLSearchParams(url.search);


const currentData = url.searchParams;
console.log(URLSearchParams.get())


var usrinput = document.getElementById("writing");
usrinput.onkeyup = function() {
    console.log(this.value);
}

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

console.log(stringtohex("Hello"))
console.log(hextostring("48656c6c6f"))