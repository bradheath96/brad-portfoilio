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
