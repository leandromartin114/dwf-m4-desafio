function addInfo(params) {
	const template = document.querySelector(".template");
	const content = document.querySelector(".about-me-section");
	template.content.querySelector(".sub-title").textContent = params.title;
	template.content.querySelector(".text").textContent = params.description;
	template.content.querySelector(".about-me-section__image").src = params.img;
	const clone = document.importNode(template.content, true);
	content.appendChild(clone);
}
function getInfo() {
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
				return i.sys.contentType.sys.id === "info";
			});
			const collection = newItems.map((i) => {
				return {
					title: i.fields.titulo,
					description: i.fields.descripcion,
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
