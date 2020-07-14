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

//On Scroll: Creating a button which will scrollTop
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
