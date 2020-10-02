

// show tag message

var mess1 = document.getElementById('mess_1');
var mess2 = document.getElementById('mess_2');
var mess3 = document.getElementById('mess_3');
// function 

mess1.onmouseover  = function(){mouseOver1()};
mess1.onmouseout = function(){mouseOut1()};
mess2.onmouseover  = function(){mouseOver2()};
mess2.onmouseout = function(){mouseOut2()};
mess3.onmouseover  = function(){mouseOver3()};
mess3.onmouseout = function(){mouseOut3()};

function mouseOver1(){
	document.getElementById('message_pro_1').style.display = "block";
}

function mouseOut1(){
	document.getElementById('message_pro_1').style.display = "none";
}

function mouseOver2(){
	document.getElementById('message_pro_2').style.display = "block";
}

function mouseOut2(){
	document.getElementById('message_pro_2').style.display = "none";
}

function mouseOver3(){
	document.getElementById('message_pro_3').style.display = "block";
}

function mouseOut3(){
	document.getElementById('message_pro_3').style.display = "none";
}

//------------------------------

//scroll navbar

function navbarScroll(){
	window.onscroll = function(){myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    navbar.classList.add("sticky");
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}
	myFunction();
}
navbarScroll();







//menu navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});




//
function backToTop(){
	//Scroll back to top button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};


	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}
	// scrollFunction();
	//-----------------
	function scrollToTop (duration) {
	    // cancel if already on top
		if (document.scrollingElement.scrollTop === 0) return;

		const totalScrollDistance = document.scrollingElement.scrollTop;
		let scrollY = totalScrollDistance, oldTimestamp = null;

		function step (newTimestamp) {
		    if (oldTimestamp !== null) {
		        // if duration is 0 scrollY will be -Infinity
		        scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
		        if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
		        document.scrollingElement.scrollTop = scrollY;
		    }
		    oldTimestamp = newTimestamp;
		    window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}

}

// backToTop();



