let calcValue = document.getElementsByClassName('calcBtn');

function getBtnValue(){
	console.log(calcValue.innerHTML);
	return calcValue.innerHTML;
}
calcValue.onclick = getBtnValue();