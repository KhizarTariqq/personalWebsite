const listImgs = document.getElementsByClassName('skillImage');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn")
    }
  })
}

const callback2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn2")
    }
  })
}

const callback3 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn3")
    }
  })
}

const callback4 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn4")
    }
  })
}

const callback5 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn5")
    }
  })
}

const callback6 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn6")
    }
  })
}

const callback7 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn7")
    }
  })
}

const callback8 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn8")
    }
  })
}

const callback9 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn9")
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)
const myObserver2 = new IntersectionObserver(callback2, options)
const myObserver3 = new IntersectionObserver(callback3, options)
const myObserver4 = new IntersectionObserver(callback4, options)
const myObserver5 = new IntersectionObserver(callback5, options)
const myObserver6 = new IntersectionObserver(callback6, options)
const myObserver7 = new IntersectionObserver(callback7, options)
const myObserver8 = new IntersectionObserver(callback8, options)
const myObserver9 = new IntersectionObserver(callback9, options)

myObserver.observe(listImgs[0])
myObserver2.observe(listImgs[1])
myObserver3.observe(listImgs[2])
myObserver4.observe(listImgs[3])
myObserver5.observe(listImgs[4])
myObserver6.observe(listImgs[5])
myObserver7.observe(listImgs[6])
myObserver8.observe(listImgs[7])
myObserver9.observe(listImgs[8])