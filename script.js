//your JS code here. If required.
const para = document.getElementById("timer");
function setTime(){
	const date = new Date();
	para.textContent = date.toLocaleString();
}
setInterval(setTime,1000);