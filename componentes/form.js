function insertForm(el) {
	const formEl = document.createElement("div");
	formEl.innerHTML = `
    <form class="contact-form">
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
</form>`;
	el.appendChild(formEl);
}
function sendData() {
	const form = document.querySelector(".contact-form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const value = Object.fromEntries(data.entries());
		const message = ` name:  ${value.name}
        email:  ${value.email}
        mensaje: ${value.message} `;
		fetch("https://apx-api.vercel.app/api/utils/dwf", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				to: "leandrom.roldan@gmail.com",
				message: message,
			}),
		}).then(() => {
			console.log(message);
			alert("Mensaje enviado con éxito");
		});
	});
}
