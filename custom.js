
//Title array
var titleArray=['Front End Developer', 'Artist', 'UI/UX Developer','Innovator'];
var counter=0;
var changeTitle=document.getElementById('title');
setInterval(change,2000);
function change(){
	changeTitle.innerHTML=titleArray[counter];
	counter++;
	if(counter>=titleArray.length){
		counter=0;
	}
}

//Variables
var blurPage=document.querySelector("#mainContainer");
var glasses=document.querySelector(".glasses");

//blurs page
window.onload=(resumeQuestion);
function resumeQuestion() {
	blurPage.classList.add("blur");
	glasses.style.display='block';
}

//removes blur
glasses.addEventListener("click", removeBlur);
function removeBlur(){
	blurPage.classList.remove("blur");
	glasses.classList.add('hideGlasses');	
}

//starts typewritter
var techItem=document.querySelector(".techList");
techItem.addEventListener("click", triggerType);
function triggerType(){
	var techSection=document.querySelector(".tech-section");
	techSection.classList.add("startType");	
	
}

//Chat with me
var chat=document.querySelector('.chatWithMe');
chat.addEventListener('click', chatWithMe);

function chatWithMe() {
    var chatAnswer;
    var chatQuestion = prompt("Type a number:\n1: What are my hobbies\n2: Why did I chose to become a developer\n3: What are my long term goals\n4: How can you get in contact with me");
    switch(chatQuestion) {
	  case "one":
      case "1":
        chatAnswer = "Outside of work I enjoy hiking, longboarding, sightseeing and going on mini adventures";
        break;
      case "2":
        chatAnswer = "I decided to become a developer because I was fasinated with the idea of seeing a few lines of code come to life, it 						is almost an art form";
        break;
      case "3":
        chatAnswer = "My long term goal is get more involved with the IA field";
        break;
      case "4":
        chatAnswer = "You can shoot me an email at maheen.zaidi8@gmail.com";
        break;
      default:
        chatAnswer = "I'm sorry, I didn't understand that number";
    }
    alert(chatAnswer);
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


