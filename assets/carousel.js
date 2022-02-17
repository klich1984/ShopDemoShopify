var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

var swiper2 = new Swiper('.swiper-desktop', {
	slidesPerView: 2,
	spaceBetween: 30,
	loopFillGroupWithBlank: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// Swiper product
var swiper3 = new Swiper('.swiper-product', {
	slidesPerView: 1,
	spaceBetween: 30,
	loopFillGroupWithBlank: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const $select = document.getElementById('sort_by')

$select.addEventListener('change', e => {
	// Obtener el estado actual de la url ej: http://127.0.0.1:9292/collections/reebok/Tenis
	let url = new URL(window.location.href)
	// Si encuentra un parametro con el nombre de sort_by cambiamos su valor al evento actual
	url.searchParams.set('sort_by', e.currentTarget.value)
	// Le pasamos el valor a la url para que se redireccione
	window.location = url.href
})
