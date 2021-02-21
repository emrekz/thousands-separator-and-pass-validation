/*------------- Thousands Seperator - Begin -----------------*/

let firstNumber = 0;
let onlyNumberRegex = /^[0-9]*$/;
let onlyNumber = [];
document.getElementById("firstNumber").addEventListener("change", function(){
	firstNumber =   document.getElementById("firstNumber").value;
	let onlyNumber = firstNumber.match(onlyNumberRegex);
	if(onlyNumber == null){
		document.getElementById('resultLabel').className  = 'alert alert-danger'
		document.getElementById('resultLabel').innerHTML = 'It is not number !';
	}
	else{
		setFirstNumber(firstNumber)
		document.getElementById('resultLabel').className  = 'alert alert-success'

	}
	
});

let newFirstNumber=[]; let resNumber = []; let numberLength;
let resultNumber = []; let result = []; let rmnLength;
function setFirstNumber(x){
	x=x.split('');
	numberLength = Math.floor(x.length/3);
	rmnLength = x.length%3;

	for(let i=0;i<numberLength;i++){
		newFirstNumber[i] = x.splice(x.length-3,x.length);
		newFirstNumber[i] = newFirstNumber[i].join('');
	}
	if(rmnLength>0){
		result = x.join('');
	}
	resNumberFunc();
}

function resNumberFunc(){
	let resLength = newFirstNumber.length-1;
	resNumber = result;
	for(let i=resLength;i>=0;i--){
		if(rmnLength > 0 || (resLength > 0 && i!=resLength)){
			resNumber += '.'
		}
		resNumber += newFirstNumber[i]
	}
	document.getElementById('resultLabel').innerHTML = resNumber;
	newFirstNumber = [];
	resNumber = [];
	result = [];
}
/*------------- Thousands Seperator - End -----------------*/


/*------------- Password Validation - Begin -----------------*/

let firstPass;
document.getElementById("pass").addEventListener("change", function(){
	firstPass =  document.getElementById("pass").value;
	document.getElementById("resultLabel2").innerHTML = '';
	checkPass();
});

let resultHtml = "<div class='alert alert-danger' role='alert' id='resultLabel2'>";
function checkPass(){
	let spC = []; let specialChar = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
	let lwC = []; let lowerCase = /[a-z]/g;
	let upC = []; let upperCase = /[A-Z]/g;
	let n = []; let number = /[0-9]/g;

	spC = firstPass.match(specialChar);
	lwC = firstPass.match(lowerCase);
	upC = firstPass.match(upperCase);
	n = firstPass.match(number);
	firstPassLength = firstPass.length;

	
	if(spC == null){
		document.getElementById("resultLabel2").innerHTML += resultHtml + "Must contain least a special character (eg. '#!?%:+) !"+ "</div>"
	}
	if(lwC == null){
		document.getElementById("resultLabel2").innerHTML += resultHtml+"Must contain least a lowercase (a-z) !"+ "</div>"
	}
	if(upC == null){
		document.getElementById("resultLabel2").innerHTML += resultHtml+"Must contain least a uppercase (A-Z) !"+ "</div>"
	}
	if(n == null){
		document.getElementById("resultLabel2").innerHTML += resultHtml+"Must contain least a number (0-9) !"+ "</div>"
	}
	if(firstPassLength > 15 || firstPassLength < 8){
		document.getElementById("resultLabel2").innerHTML += resultHtml+"Length of password must be 8-15 character !"+ "</div>"
	}

	if(spC != null && lwC != null && upC != null && n != null && (firstPassLength <= 15 && firstPassLength >= 8)){
		document.getElementById("resultLabel2").innerHTML = "<div class='alert alert-success' role='alert' id='resultLabel2'>Password Success</div>"
	}
}


document.getElementById("flexCheckDefault").addEventListener("change", function(){
	if (this.checked) {
    	document.getElementById("pass").type = 'text';
  	} 
  	else {
    	document.getElementById("pass").type = 'password';
  	}
	
});

/*------------- Password Validation - End -----------------*/