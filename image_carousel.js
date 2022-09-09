export class ImageCarousel extends HTMLElement {
	images = [];
	constructor() {
		super();
		// this.root = this.attachShadow({ mode: 'open' });
		for (let i = 0; i < this.children.length; i++) {
			if (this.children[i].tagName == 'IMG') {
				this.images.push(this.children[i])
			}
		}
	}

	connectedCallback() {
		const container = this.createElement('div')
		container.setAttribute('class', 'container');
		this.images.entries.forEach((_, index) => {
			const input = container.createElement('input');
			if (index == 0) {
				input.setAttribute('checked');
			}
			input.setAttribute('type', 'radio');
			input.setAttribute('name', 'slider');
			input.setAttribute('id', `item-${index}`);
		});

		this.images.entries.forEach((element, index) => {
			const label = this.root.createElement('label');
			label.setAttribute('class', 'card');
			label.setAttribute('for', `item=${index}`);
			label.setAttribute('id', `song=${index}`);
			const img = label.createElement('img');
			img.innerHTML = element;
		});
	}


}

customElements.define('image-carousel', ImageCarousel);
