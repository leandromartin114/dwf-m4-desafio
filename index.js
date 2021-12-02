function main() {
	const headerContainer = document.querySelector(".welcome-section");
	const formContainer = document.querySelector(".contact-section");
	const footerContainer = document.querySelector(".footer");
	insertHeader(headerContainer);
	openMenu();
	insertForm(formContainer);
	insertFooter(footerContainer);
}
main();
