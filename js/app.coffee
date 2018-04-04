$(document).ready ->
	tabItem = $('.tabs li')
	tabItem.on('click', (e) -> 

		e.preventDefault();

		tabItem.removeClass('active');

		tab = e.currentTarget.dataset.section
		$('.content-tab.main').removeClass('main')
		$('.content-tab.' + tab).addClass('main')

		$(this).addClass('active')

)