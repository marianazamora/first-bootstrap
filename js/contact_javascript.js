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

function resetfunction(){
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("comment").value = "";
}

function submitform(){
  //Obtains value from form
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var comment = document.getElementById("comment").value;
  //Inputs value into HTML
  document.getElementById("formresults").innerHTML = "Here's your information: <br>"+" "+name+" "+lastname+"<br>"+gender+" "+age+"<br>"+email+"<br>"+website+"<br>"+comment;
  document.getElementById("resultlocation").style.display = "flex"
  window.scrollTo(0,document.body.scrollHeight);


  //Removes value from form and avoids reloading website
  resetfunction();
  return false;
}

