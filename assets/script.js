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
})

//Flèche gauche
arrowLeft.addEventListener("click", () => {
	if (i <= 0) {
		i = slides.length - 1
	} else {
		i--
	}
	sliderUpdate(i)
})

// Fonction mettant à jour les images et le texte du carrousel
function sliderUpdate (index) {
	let sliderImg = document.querySelector(".banner-img")
	sliderImg.src = pathToImage + slides[index].image
	
	let sliderTxt = document.getElementById("sliderTxt")
	sliderTxt.innerHTML = slides[index].tagLine
}


// Points du carrousel

let dot = document.createElement("div")
let dots = document.querySelector(".dots")
let quantityDots = 0

//Fonction de création des points du carrousel 
function createDots(quantityDots) {

	for (let quantityDots = 0; quantityDots <= slides.length - 1; quantityDots++) {
		dots.appendChild(dot).classList.add("dot");
	}
	return dot;
	console.log(quantityDots)
}

let totalDots = createDots(dot)


// Fonction pour relier les dots aux slides
function linkDotsToSlides () {
	


}

// Fonction pour changer l'apparence du dot sélectionné
function changeSelectedDot (dot) {
    if (dot = dot.active) {
        dot.classList.add("dot_selected")
    }
    return dot
}

changeSelectedDot(1)
