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
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let i = 0

//Flèche droite
arrowRight.addEventListener("click", () => {
	if (i >= slides.length - 1) {
		i = 0
	} else {
		i++
	}
	sliderUpdate(i)
	dotsUpdate(i)
})

//Flèche gauche
arrowLeft.addEventListener("click", () => {
	if (i <= 0) {
		i = slides.length - 1
	} else {
		i--
	}
	sliderUpdate(i)
	dotsUpdate(i)
})

// Fonction mettant à jour les images et le texte du carrousel
function sliderUpdate (index) {
	let sliderImg = document.querySelector(".banner-img");
	sliderImg.src = pathToImage + slides[index].image;
	
	let sliderTxt = document.getElementById("sliderTxt");
	sliderTxt.innerHTML = slides[index].tagLine;
}


// Points du carrousel

let dots = document.querySelector(".dots")

//Fonction de création des points du carrousel 
function createDots() {
	for (let quantityDots = 0; quantityDots <= slides.length - 1; quantityDots++) {
		let dot = document.createElement("div");
		dots.appendChild(dot).classList.add("dot");
	}
}
createDots()



// Fonction permettant de modifier l'apparence du point sélectionné
function dotsUpdate (index) {
	let dot = document.querySelectorAll(".dot");

	for (let compteur = 0; compteur < dot.length; compteur++) {
		dot[compteur].classList.remove("dot_selected")
	}

	dot[index].classList.add("dot_selected")
}
dotsUpdate(0)