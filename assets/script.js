const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let pathToImage = "assets/images/slideshow/"
let nombreSlides = 4
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let i = 0

arrowRight.addEventListener("click", () => {
	if (i >= slides.length - 1) {
		i = 0
	} else {
		i++
	}
	console.log(i)
	sliderUpdate(i)
})

arrowLeft.addEventListener("click", () => {
	if (i <= 0) {
		i = slides.length - 1
	} else {
		i--
	}
	console.log(i)
	sliderUpdate(i)
})


let nombreImagesSlide = slides.length

//function (createDots) 

/*function a (quantityDots) {
	for (slides.length - 1) {
		let dot = document.createElement("div")
		let dots = document.querySelector(".dots")
		dots.appendChild(dot)
	}
}*/

function sliderUpdate (index) {
	let sliderImg = document.querySelector[".banner-img"]
	sliderImg.src = pathToImage + slides[index].image
}