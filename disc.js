/**
 * 
 */

var counter = 0;

//array of all the different images to load
var images = ["Disc_0.png", "Disc_15.png", "Disc_30.png",
	"Disc_45.png", "Disc_60.png", "Disc_75.png",
	"Disc_90.png", "Disc_105.png", "Disc_120.png",
	"Disc_135.png", "Disc_150.png", "Disc_165.png",
	"Disc_180.png", "Disc_195.png", "Disc_210.png",
	"Disc_225.png", "Disc_240.png", "Disc_255.png",
	"Disc_270.png", "Disc_285.png", "Disc_300.png",
	"Disc_315.png", "Disc_330.png", "Disc_345.png"]


//loads the first image when started.
function loadImage() {
	var imageObj = new Image();
	imageObj.onload = function() {
		var img = document.getElementById('image');
		img.setAttribute('src', this.src);
	};
	imageObj.src = "textures/" + images[counter];
}

//counts how often the R key was pressed and loads the previous image.
//when the first image is reached the counter is set to length of the array where the image names are saved.
function rotateImageCounterClockwise(img) {
	if (images[counter] == "Disc_0.png") {
		counter = images.length - 1;
		img.src = "textures/" + images[counter];
	}
	else {
		counter--;
		img.src = "textures/" + images[counter];
	}
}

//counts how often the L key was pressed and loads the next image.
//when the last image is reached the counter is set to 0
function rotateImageClockwise(img) {
	counter++;
	if (images[counter] == "Disc_345.png") {
		counter = 0;
		img.src = "textures/" + images[counter];
	}
	else {
		img.src = "textures/" + images[counter];
	}
}

//function to handle event when key is pressed.
window.onkeydown = function(evt) {
	console.log(evt);
	var key = evt.which ? evt.which : evt.keyCode;
	var c = String.fromCharCode(key);
	var img = document.getElementById('image');

	switch (c) {
		case ('L'):
			rotateImageClockwise(img);
			break;
		case ('R'):
			rotateImageCounterClockwise(img);
			break;
	}
}