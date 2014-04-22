var CONTAINER_SIZE = [960, 400];
var ROTATE_INCRI_PLANET = 0.7 / 2;
var ROTATE_INCRI_CLOUDS = 0.2 / 2;
var ROTATE_INCRI_BLADE = 1.5 / 2;
var ROTATE_TIMER = 25;
var ROTATE_INCRI_CLOUDS = [0.2, 0.1, 0.4, 0.3, 0.05];

var BASE_URL = "/Content/Images/";

$(document).ready(function () {
    if ($('div#animation').length != 0) {
        onPageLoaded();
    }
});

function onPageLoaded() {
	draw();
	positionElements(true);
	rotate();
}

$(window).resize(function() {
	delay(function() {
		positionElements(false);
	}, 250);
});

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function removeElement(id) {
  return (elem = document.getElementById(id)).parentNode.removeChild(elem);
}

function draw() {
	var main = document.getElementById("animation");
	
	var containercheck = document.getElementById("animation_container");
	if (containercheck != null) {
		removeElement("animation_container");
	}
	
	var container = document.createElement("div");
	with (container) {
		id = "animation_container";
		
		with (style) {
			//border = "1px solId black";
			position = "relative";
			overflow = "hIdden";
			
			margin = "10px auto 10px auto";
			backgroundColor = "#a0d9f3";
		}
	}
			
	var container_planet = document.createElement("div");
	with (container_planet) {
		id = "planet";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_clouds1 = document.createElement("img");
	with(container_clouds1) {
		id = "clouds1";
		src = BASE_URL + "clouds1.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_clouds2 = document.createElement("img");
	with(container_clouds2) {
		id = "clouds2";
		src = BASE_URL + "clouds1.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_clouds3 = document.createElement("img");
	with(container_clouds3) {
		id = "clouds3";
		src = BASE_URL + "clouds1.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_clouds4 = document.createElement("img");
	with(container_clouds4) {
		id = "clouds4";
		src = BASE_URL + "clouds1.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_clouds5 = document.createElement("img");
	with(container_clouds5) {
		id = "clouds5";
		src = BASE_URL + "clouds1.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_planet_planet = document.createElement("img");
	with (container_planet_planet) {
		id = "planet_planet";
		src = BASE_URL + "planet.png";
		
		with (style) {
			position = "relative";
		}
	}
	
	var container_planet_blade1 = document.createElement("img");
	with (container_planet_blade1) {
		id = "planet_blade1";
		src = BASE_URL + "blade.png";
		
		with (style) {
			position = "absolute";
		}
	}
		
	var container_planet_blade2 = document.createElement("img");
	with (container_planet_blade2) {
		id = "planet_blade2";
		src = BASE_URL + "blade.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	var container_planet_blade3 = document.createElement("img");
	with (container_planet_blade3) {
		id = "planet_blade3";
		src = BASE_URL + "blade.png";
		
		with (style) {
			position = "absolute";
		}
	}
	
	main.appendChild(container);
	//
	container.appendChild(container_planet);
	//
	container.appendChild(container_clouds1);
	container.appendChild(container_clouds2);
	container.appendChild(container_clouds3);
	container.appendChild(container_clouds4);
	container.appendChild(container_clouds5);
	//
	container_planet.appendChild(container_planet_planet);
	container_planet.appendChild(container_planet_blade1);
	container_planet.appendChild(container_planet_blade2);
	container_planet.appendChild(container_planet_blade3);
}

function positionElements(doresize) {
	var container = $("#animation_container");
	//
	var clouds1 = $("#clouds1");
	var clouds2 = $("#clouds2");
	var clouds3 = $("#clouds3");
	var clouds4 = $("#clouds4");
	var clouds5 = $("#clouds5");
	//
	var planet = $("#planet");
	//
	var planet_planet = $("#planet_planet");
	//
	var planet_blade1 = $("#planet_blade1");
	var planet_blade2 = $("#planet_blade2");
	var planet_blade3 = $("#planet_blade3");
	//
	var divf = 1.6;
	var div_fac = (container.width() / divf);
	var offsetx = ((container.width() / 8));
	var offsety = 10;
	
	var percent = (div_fac / 1417);
	percent = 0.56;
	div_fac = 789.375
		
	if (doresize == true) {
		$("#planet").css({
			width: div_fac,
			height: div_fac
		});
	
		$("#planet_planet").css({
			width: div_fac,
			height: div_fac
		});
	
		$("#planet_blade1").css({
			width: 200 * percent,
			height: 200 * percent
		});
	
		$("#planet_blade2").css({
			width: 200 * percent,
			height: 200 * percent
		});
	
		$("#planet_blade3").css({
			width: 200 * percent,
			height: 200 * percent
		});
	}
	
	//POSITION
	
	$("#planet").css({
		left: (container.width() - planet.width()) / 2,
		top: (container.height() - (planet.height() / 3)) - offsety
	});
	
	$("#planet_blade1").css({
		left: 420 * percent,
		top: 205 * percent
	});
	
	$("#planet_blade2").css({
		left: 613 * percent,
		top: 138 * percent
	});
	
	$("#planet_blade3").css({
		left: 772 * percent,
		top: 201 * percent
	});
	
	$("#planet").animate({
		left: "+=" + offsetx
	}, 0);
	
	for (var i = 1; i < 6; i ++) {
		if (doresize == true) {
			$("#clouds" + i).css({
				width: $("#planet").width(),
				height: $("#planet").width()
			});
		}
		
		$("#clouds" + i).css({
			left: $("#planet").position().left,
			top: $("#planet").position().top
		});
		
		$("#clouds" + i).animate({
			left: "+=" + (Math.round($("#planet").position().left) - Math.round($("#clouds" + i).position().left))
		}, 0);
	}
}

function rotate() {
	var planetdeg = 0;
	var cloudsdeg = 0;
	var bladedeg = 0;
	
	var clouds1deg = 120;
	var clouds2deg = 150;
	var clouds3deg = 50
	var clouds4deg = 23;
	var clouds5deg = 254;
	
	(setInterval(
		function() {
			planetdeg += ROTATE_INCRI_PLANET;
			bladedeg += ROTATE_INCRI_BLADE;
			clouds1deg -= ROTATE_INCRI_CLOUDS[0];
			clouds2deg -= ROTATE_INCRI_CLOUDS[1];
			clouds3deg -= ROTATE_INCRI_CLOUDS[2];
			clouds4deg -= ROTATE_INCRI_CLOUDS[3];
			clouds5deg -= ROTATE_INCRI_CLOUDS[4];
			
			$("#planet").rotate(planetdeg);
			
			rotateElement("#clouds1", clouds1deg);
      rotateElement("#clouds2", clouds2deg);
      rotateElement("#clouds3", clouds3deg);
      rotateElement("#clouds4", clouds4deg);
      rotateElement("#clouds5", clouds5deg);
			
			rotateElement("#planet_blade1", bladedeg);
			rotateElement("#planet_blade2", bladedeg);
			rotateElement("#planet_blade3", bladedeg);
			
		}, ROTATE_TIMER
	));
}

function rotateElement(name, deg) {
  var degrees = Math.floor(deg * 100)/100;
  $(name).rotate(degrees);
}