window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("sidenVises");
	document.querySelector("#menuknapMobil").addEventListener("click", toggleMenu);
}

function toggleMenu() {
	console.log("toggleMenu");
	document.querySelector("#menuMobil").classList.toggle("hidden");

	let erSkjult = document.querySelector("#menuMobil").classList.contains("hidden");

	if (erSkjult == true) {
		document.getElementById("menuknapMobil").src = "Icons/Menu.svg";
	} else {
		document.getElementById("menuknapMobil").src = "icons/No.svg";
	}
}
