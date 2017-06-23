

var infoButtons = document.getElementsByClassName('button');
	
console.log(infoButtons.length);
for (var i = 0; i<=infoButtons.length; i++){
	if (i <= infoButtons.length -1){
		console.log(infoButtons[i].innerText);
	} 
}