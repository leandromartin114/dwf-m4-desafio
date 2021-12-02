function insertForm(el) {
	const formEl = document.createElement("div");
	formEl.innerHTML = `
    <div class="contact-form">
    <h2 class="sub-title xl">Escribime</h2>
    <div class="contact-form__content">
        <div class="contact-form__item">
            <label for="name" class="contact-form__label">NOMBRE</label>
            <input type="text" name="name" class="contact-form__input" />
        </div>
        <div class="contact-form__item">
            <label for="email" class="contact-form__label">EMAIL</label>
            <input type="email" name="email" class="contact-form__input" />
        </div>
        <div class="contact-form__item">
            <label for="message" class="contact-form__label">MENSAJE</label>
            <textarea name="message" class="contact-form__text"></textarea>
        </div>
        <div class="contact-form__button-box">
            <button class="contact-form__button">Enviar</button>
        </div>
    </div>
</div>`;
	el.appendChild(formEl);
}
