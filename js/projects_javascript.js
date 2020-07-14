/*----------Global Footer Variables----------*/
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var hour = d.getHours();
var min = d.getMinutes();
var final = hour + ":" + min + " " + day + "/" + month + "/" + year;

//Add time at the bottom of the page
document.getElementById("ftr-date").innerHTML = "Mariana Perez" + " " + final; 


/*-----------Projects page----------*/
//1. On Load: When the page fully loads it will show a console message
window.onload = function() {console.log("The page is fully loaded!")}

//2. On Scroll: Creating a button which will scrollTop
//Button also disappears and appears if user is at the top of the page.
var scrolltopbutton = document.getElementById("to-the-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if (document.documentElement.scrollTop > 20) {
		scrolltopbutton.style.visibility = "visible";
	} else {
		scrolltopbutton.style.visibility = "hidden";
	}
}

function scrollup(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

}

//3. On Mouse Over: Created two functions to work with onmouseover/onmouseout which change 
//the visibility in CSS of the element.
function bannermouse(){
	document.getElementById("bannerpop").style.visibility = "visible";
}
function bannermouseout(){
	document.getElementById("bannerpop").style.visibility = "hidden";
}

