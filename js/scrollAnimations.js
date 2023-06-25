const listImgs = document.getElementsByClassName('skillImage');
const skillsDiv = document.getElementById('skills');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      listImgs[0].classList.add("fadeIn")
	  listImgs[1].classList.add("fadeIn2")
	  listImgs[2].classList.add("fadeIn3")
	  listImgs[3].classList.add("fadeIn4")
	  listImgs[4].classList.add("fadeIn5")
	  listImgs[5].classList.add("fadeIn6")
	  listImgs[6].classList.add("fadeIn7")
	  listImgs[7].classList.add("fadeIn8")
	  listImgs[8].classList.add("fadeIn9")
    }
  })
}

// Start the animation once 90% of the skills div is visible
const options = {threshold: "0.75"}

const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(skillsDiv)