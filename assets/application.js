// Put your application javascript here
;((d) => {
	const $btnMenu = d.querySelector('.header-menu-burger'),
		$modalMovil = d.querySelector('.modal-movil'),
		$btnClose = d.querySelector('.btn-close'),
		$btnClose2 = d.querySelectorAll('.btn-close-2'),
		$btnBack = d.querySelectorAll('.close-to-back'),
		$body = d.querySelector('body'),
		$ammouncement = d.querySelector('.ammouncement-bar'),
		$buttonMenuText = d.getElementById('button-menu'),
		$navigation = d.querySelector('.navegacion'),
		$menuText = d.querySelector('.menu'),
		$itemMenu = d.querySelectorAll('.navegacion .menu > .item-submenu a'),
		$closeMenu = d.querySelectorAll('.navegacion .submenu li.go-back'),
		$summaryLinks = d.querySelectorAll('.summary-link'),
		$footer = d.querySelector('footer')

	d.addEventListener('click', e => {
		// console.log(e.target, $btnClose2)
		console.log($footer)
	})

		// Mostrando SubMenu
	$summaryLinks.forEach(el => {
		el.addEventListener('click', (e) => {
			let indexMenu = e.target.parentNode.getAttribute('menu')

		console.log(indexMenu);
		let $submenu = d.querySelector('.submenu-parent[menu="' + indexMenu + '"]').nextSibling.nextElementSibling

		$submenu.style.left = '0'
		// $btnClose2.setAttribute('menu-close', 'indexMenu')

		// console.log('submenu=', $submenu)
		})
	})

	$btnMenu.addEventListener('click', (e) => {
		$modalMovil.classList.toggle('is-active')
		$body.classList.add('overflow')
		$ammouncement.classList.add('is-modal')
		$footer.style.display = 'none'
	})

	$btnClose.addEventListener('click', (e) => {
		$modalMovil.classList.toggle('is-active')
		$body.classList.remove('overflow')
			$ammouncement.classList.remove('is-modal')
			$footer.style.display = 'block'

	})

	// CERRAR TODOS LOS SUBMENUS
	$btnClose2.forEach(element => {
		element.addEventListener('click', e => {
			let $elementClose = e.target.parentNode.parentNode.parentNode.parentNode

			$modalMovil.classList.toggle('is-active')
			$body.classList.remove('overflow')
			$ammouncement.classList.remove('is-modal')

			$elementClose.style.left = '-100vw'
			$footer.style.display = 'block'

		})
	});

	$btnBack.forEach(element => {
		element.addEventListener('click', e => {
			let $elementClose = e.target.parentNode.parentNode.parentNode.parentNode

			$elementClose.style.left = '-100vw'
		})
	});

	// MOSTRANDO Y OCULTANDO MENU
	$buttonMenuText.addEventListener('click', (e) => {
		if ($buttonMenuText.classList.contains('fa-bars')) {
			$navigation.style.width = '100%'
			$navigation.style.background = 'rgba(0,0,0,.5)'
			$buttonMenuText.classList.remove('fa-bars')
			$buttonMenuText.classList.add('fa-close')
			$menuText.style.left = '0'
		} else {
			$navigation.style.width = '0%'
			$navigation.style.background = 'rgba(0,0,0,.0)'
			$buttonMenuText.classList.add('fa-bars')
			$buttonMenuText.classList.remove('fa-close')
			$menuText.style.left = '-320px'
		}
	})

	// MOSTRANDO SUBMENU

	$itemMenu.forEach((element) => {
		element.addEventListener('click', (e) => {
			// e.preventDefault()
			let positionMenu = e.target.parentNode.getAttribute('menu')

			let $submenu = d.querySelector(
				'.item-submenu[menu="' + positionMenu + '"] .submenu'
			)

			$submenu.style.left = '0px'

		})
	})



	// OCULTANDO SUBMENU
	$closeMenu.forEach((element) => {
		element.addEventListener('click', (e) => {
			// console.log(e.target)
			let $elementClose = e.target.parentNode
			$elementClose.style.left = '-320px'

			console.log(elementClose)
		})
	})
})(document)
