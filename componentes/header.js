function insertHeader(el) {
	const headerEl = document.createElement("div");
	headerEl.innerHTML = `
		<div class="menu">
		<img src="./images/cancel.png" alt="" class="menu__close" />
		<ul class="menu__ul">
			<li class="menu__li"><a href="./porftolio.html">Portfolio</a></li>
			<li class="menu__li"><a href="./servicios.html">Servicios</a></li>
			<li class="menu__li"><a href="./contacto.html">Contacto</a></li>
		</ul>
	</div>
	<header class="header">
		<a href="./index.html"><img src="./images/logo-w.png" alt="logo" class="header__logo" /></a>
		<img src="./images/menu-w.png" alt="menu" class="header__open" />
		<ul class="header__menu-desktop">
			<li class="header__menu-desktop-li">
				<a href="./porftolio.html">Portfolio</a>
			</li>
			<li class="header__menu-desktop-li">
				<a href="./servicios.html">Servicios</a>
			</li>
			<li class="header__menu-desktop-li">
				<a href="./contacto.html">Contactos</a>
			</li>
		</ul>
	</header>
`;
	el.appendChild(headerEl);
}
function openMenu() {
	const openMenuEl = document.querySelector(".header__open");
	const menuEl = document.querySelector(".menu");
	const closeMenuEl = document.querySelector(".menu__close");

	openMenuEl.addEventListener("click", () => {
		menuEl.style.display = "flex";
	});
	closeMenuEl.addEventListener("click", () => {
		menuEl.style.display = "";
	});
}
