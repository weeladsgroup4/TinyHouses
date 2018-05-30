$.get('components/lander.html', (data) => {
	$('#content-container').empty().replaceWith(data);
});
$.get('components/navigation.html', (data) => {
	$('#navigation-container').replaceWith(data);
});

$(document).ready( () => {
	$('#navigation-container').hide();
	$('#buyer-segment').on('click', () => {
		$('#navigation-container').show();
		$.get('components/account.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})
	$('#seller-segment').on('click', () => {
		$('#navigation-container').show();
		$.get('components/account.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})

	$('#search-page').on('click', () => {
		$.get('components/search.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
	})
	$('#info-page').on('click', () => {
		$.get('components/info.html', (data) => {
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

	$('#milestone-page').on('click', () => {
		$.get('components/milestone.html', (data) => {
			$('#content-container').replaceWith(data);
		})
	})
});

