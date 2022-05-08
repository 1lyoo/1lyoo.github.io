let image
let wasBooped = false

function boop() {
	image.src = "images/click.png"
	wasBooped = true

	setTimeout(function() {
		image.src = "images/default.png"
		wasBooped = false
	}, 1000);
}

function onMobileTap() {
	if (window.matchMedia("only screen and (max-width: 760px)").matches) {
		boop()
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	const button = document.getElementsByClassName("btn")[0];

	image = document.getElementById("img")

	button.onmouseover = function() {
		if (wasBooped) {
			return
		}
		image.src = "images/hover.png"
	}
	
	button.onmouseout = function() {
		if (wasBooped) {
			return
		}
		image.src = "images/default.png"
	}

	button.onmousedown = function() {
		boop()
	}
  });