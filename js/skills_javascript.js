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


/*----------Skills page----------*/

//Global variables for skill page
var skills = ["HTML", "CSS", "Javascript", "Python", "Marketing", "UX"];
var skilllist = document.getElementById("skillsinput");
var newdiv = document.createElement("div");


//Function which creates new div items for the skill list
function iterate(skill,index){
	var clone = newdiv.cloneNode();
	clone.textContent = skill;
	skilllist.appendChild(clone);
}

//Function which deletes div items once the list needs to be updated
function removechild(){
	var skilllist = document.getElementById("skillsinput");
	while (skilllist.firstChild) {
  		skilllist.removeChild(skilllist.firstChild)
};
}

//Function which is called onclick of html button, it adds the item from the text box to array
function addskills(){
	skillvalue = document.getElementById("newskills").value;
	skills.pop(); //deletes the last item from the list
	skills.unshift(skillvalue); // adds a new item to the beginning of the list
	console.log(skills); //test to review array
	document.getElementById("newskills").value = ""; //deletes the element from the text box
	removechild(); 
	skills.forEach(iterate); 
	return false; //stops the page from reloading
}

//Function called when page loads, it automatically adds the first items from the array
skills.forEach(iterate);


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
 