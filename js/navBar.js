var menuVisible = false;
var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos){
		document.getElementById("navbar").style.top = "0";
	}
	
	else{
		document.getElementById("navbar").style.top = "-80px";
		
		// If user scrolls down while menu is open then close it
		if(menuVisible){
			mMenu();
		}
	}
	
	prevScrollpos = currentScrollPos;
}

const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbarMenu');

const mMenu = () => {
  menuVisible = menu.classList.toggle('is-active');
  menuVisible = links.classList.toggle('active');
}

// Close menu when user presses the X
menu.addEventListener('click', mMenu);

const listItems = document.getElementsByClassName('navbarItem');

// Close the menu once an option is selected
for (let i=0; i < listItems.length; i++){
	listItems[i].addEventListener('click',mMenu);
}