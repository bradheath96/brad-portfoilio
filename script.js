function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
	const techItems = document.querySelectorAll(".tech-item");

	techItems.forEach((item) => {
		item.addEventListener("click", () => {
			techItems.forEach((i) => i.classList.remove("show"));
			item.classList.add("show");
		});
	});
});

// dark/light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");

document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme === "dark") {
		setDarkMode();
	} else {
		setlightMode();
	}
});

btn.addEventListener("click", function () {
	setTheme();
});

btn2.addEventListener("click", function () {
	setTheme();
});

function setTheme() {
	let currentTheme = document.body.getAttribute("theme");
	if (currentTheme === "dark") {
		setlightMode();
	} else {
		setDarkMode();
	}
}

function setDarkMode() {
	document.body.setAttribute("theme", "dark");
	localStorage.setItem("theme", "dark");
	themeIcons.forEach((icon) => {
		icon.src = icon.getAttribute("src-dark");
	});
}

function setlightMode() {
	document.body.setAttribute("theme", "light");
	localStorage.setItem("theme", "light");
	themeIcons.forEach((icon) => {
		icon.src = icon.getAttribute("src-light");
	});
}
