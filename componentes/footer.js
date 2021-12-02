function insertFooter(el) {
	const footerEl = document.createElement("div");
	footerEl.innerHTML = `
    <div class="footer__container">
    <img src="./images/logo-w.png" alt="logo" class="footer__logo" />
    <div class="footer__social-media">
        <div class="footer__social-item">
            <h4 class="social-item__title">Instagram</h4>
            <img
                src="./images/instagram.png"
                alt="Instagram"
                class="social-item__logo"
            />
        </div>
        <div class="footer__social-item">
            <h4 class="social-item__title">Linkedin</h4>
            <img
                src="./images/linkedin.png"
                alt="Linkedin"
                class="social-item__logo"
            />
        </div>
        <div class="footer__social-item">
            <h4 class="social-item__title">Github</h4>
            <img
                src="./images/github.png"
                alt="Github"
                class="social-item__logo"
            />
        </div>
    </div>
</div>`;
	el.appendChild(footerEl);
}
