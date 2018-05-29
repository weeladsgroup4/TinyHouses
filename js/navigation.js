$.get('components/navigation.html', (data) => {
	$('#navigation-container').replaceWith(data);
});

$.get('components/lander.html', (data) => {
	$('#content-container').empty().replaceWith(data);
})	

$(document).ready( () => {
	$('#home-page').on('click', () => {
		$.get('components/lander.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#info-page').on('click', () => {
		$.get('components/info.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#search-page').on('click', () => {
		$.get('components/search.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#contact-page').on('click', () => {
		$.get('components/contact.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#about-page').on('click', () => {
		$.get('components/about.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#account-page').on('click', () => {
		$.get('components/account.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})
});
