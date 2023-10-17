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


let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let i = 0

arrowRight.addEventListener("click", () => {
	if (i < 3) {
		i++
	} else {
		i = 0
	}
	console.log(i)
})

arrowLeft.addEventListener("click", () => {
	if (i > 0) {
		i--
	} else {
		i = 3
	}
	console.log(i)
})