// Put your application javascript here
((d) => {
	const $btnMenu = d.querySelector(".header-menu-burger"),
		$modalMovil = d.querySelector('.modal-movil'),
		$btnClose = d.querySelector('.btn-close'),
		$body = d.querySelector('body'),
		$ammouncement = d.querySelector('.ammouncement-bar')


	$btnMenu.addEventListener('click', (e) => {
		$modalMovil.classList.toggle('is-active')
		$body.classList.add('overflow')
		$ammouncement.classList.add('is-modal')
	})

	$btnClose.addEventListener('click', (e) => {
		$modalMovil.classList.toggle('is-active')
		$body.classList.remove('overflow'),
		$ammouncement.classList.remove('is-modal')
	})

	d.addEventListener('click', (e) => {
		e.preventDefault()
		console.log(e.target);
	})
	// console.log('Hola',$btnClose);
})(document)
