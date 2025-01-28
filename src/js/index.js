let firstSlideContainer =
	document.getElementsByClassName("slide--content")[0];

let secondSlideContainer =
	document.getElementsByClassName("slide--content--one")[0];

let secondCanvas =
	document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");

let thirdCanvas =
	document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style", "display:none");



let containerToggleOne = setTimeout(function () {
	firstSlideContainer.setAttribute("style", "display:none");
	secondSlideContainer.setAttribute("style", "display:block");
}, 2500);


let removeFirstSlide = setTimeout(function () {
	document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;")
	secondCanvas.setAttribute("style", "display:block");
}, 6500);

let removeSecondCanvas = setTimeout(function () {
	secondCanvas.setAttribute("style", "display:none");
	thirdCanvas.setAttribute("style", "display:block")
}, 9800)

// Add preloader
window.addEventListener('load', function () {
	const images = [
		'src/images/amusement-park.png',
		'src/images/balloons.png',
		'src/images/gift.png'
	];

	let loadedImages = 0;

	function preloadImages() {
		images.forEach(src => {
			const img = new Image();
			img.onload = () => {
				loadedImages++;
				if (loadedImages === images.length) {
					document.body.classList.add('loaded');
				}
			};
			img.src = src;
		});
	}

	preloadImages();
});
