/*
new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})
*/

// создаем элемент
const getElement = (tagName, classNames, attributes) =>{
	const element = document.createElement(tagName);
	if (classNames){
		element.classList.add(...classNames);
	}
	if(attributes){
		for(const attribute in attributes){
			element[attribute] = attributes[attribute];
		}
	}
	return element;
};
// создаем хедер
const createHeader = (param) => {
	const header = getElement("header");
	const container = getElement("div", ["container"]);
	const wrapper = getElement("div", ["header"]);
	// логотип
	if(param.header.logo){
		const logo = getElement("img", ["logo"], {
			src: param.header.logo,
			alt: "Логотип " + param.title
		});
		wrapper.append(logo);
	}
	// социальные иконки
	if(param.header.social){
		const socialWrapper = getElement('div', ["social"]);
		const allSocial = param.header.social.map(item => {
			const socialLink = getElement("a", ["social-link"]);
			socialLink.append(getElement("img", [], {
				src: item.image,
				alt: item.title,
			}));

			socialLink.href = item.link;
			
			return socialLink;
		});

		socialWrapper.append(...allSocial);
		wrapper.append(socialWrapper);
	}
	// меню
	if(param.header.menu){

	}
	header.append(container);
	container.append(wrapper);

	return header;
};

const movieConstructor = (selector, options) => {

	const app = document.querySelector(selector);
	app.classList.add('body-app');
	if(options.header){
		app.append(createHeader(options));
	}

};

movieConstructor('.app', {
	title: "Ведьмак",
	header: {
		logo: "witcher/logo.png",
		social: [
			{
				title: "Twitter",
				link: "#",
				image: "witcher/social/twitter.svg",
			},
			{
				title: "Instagram",
				link: "#",
				image: "witcher/social/instagram.svg",
			},
			{
				title: "Facebook",
				link: "#",
				image: "witcher/social/facebook.svg",
			}
			
		],
		menu: [
			{
				title: "Описание",
				link: "#",
			}, 
			{
				title: "Трейлер",
				link: "#",
			},
			{
				title: "Отзывы",
				link: "#",
			}, 
		]
	}
});