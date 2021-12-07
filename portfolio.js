function addWorks(params) {
	const template = document.querySelector(".template");
	const content = document.querySelector(".main-section__content");
	template.content.querySelector(".main-section__title").textContent =
		params.title;
	template.content.querySelector(".main-section__text").textContent =
		params.description;
	template.content.querySelector(".main-section__image").src = params.img;
	template.content.querySelector(".main-section__url").href = params.url;
	const clone = document.importNode(template.content, true);
	content.appendChild(clone);
}
function getWorks() {
	return fetch(
		"https://cdn.contentful.com/spaces/0vpr854aizab/environments/master/entries?access_token=Z2oHgxxwZ7fNpp4_3ZNbYUvOaxwv1nZ6_5ZZBk4Q0uE"
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const items = data.items;
			const asset = data.includes.Asset;
			const newItems = items.filter((i) => {
				return i.sys.contentType.sys.id === "work";
			});
			const collection = newItems.map((i) => {
				return {
					title: i.fields.titulo,
					description: i.fields.descripcion,
					url: i.fields.url,
					imageId: i.fields.imagen.sys.id,
				};
			});
			collection.forEach((e) => {
				const id = getImage(e.imageId, asset);
				e.img = "https:" + id.fields.file.url;
			});
			return collection;
		});
}

function getImage(id, array) {
	const img = array.find((f) => {
		return f.sys.id == id;
	});
	return img;
}
function main() {
	const headerContainer = document.querySelector(".header-section");
	const footerContainer = document.querySelector(".footer");
	insertHeader(headerContainer);
	openMenu();
	insertFooter(footerContainer);
	getWorks().then((works) => {
		for (const iterator of works) {
			addWorks(iterator);
		}
	});
}
main();
