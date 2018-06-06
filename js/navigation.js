	$.get('components/lander.html', (data) => {
		$('#content-container').empty().replaceWith(data);
	});

	$.get('components/navigation.html', (data) => {
		$('#navigation-container').replaceWith(data);
		$('#navigation-container').hide();
	});

$(document).ready( () => {

	$('#lander-search-button').on('click', () => {
		$.get('components/search.html', (data) => {
			$('#content-container').replaceWith(data);
			$('#content-container').hide();
			$('#search-page').addClass('active');
		})
		$('#navigation-container').slideDown(1500, () => {
			$('#content-container').show();
			scrollToContent();
		})
	})

	$('#lander-login-button').on('click', () => {
		$.get('components/account.html', (data) => {
			$('#content-container').replaceWith(data);
			$('#content-container').hide();
		})
		$('#navigation-container').slideDown(1500, () => {
			$('#content-container').show();
			scrollToContent();
		});
	})

/*
	$('#home-page').on('click', () => {
		$.get('components/lander.html', (data) => {
			$('#navigation-container').hide();
			$('#content-container').replaceWith(data);
		})
		scrollToContent();
	});
*/
	$('#search-page').on('click', () => {
		$.get('components/search.html', (data) => {
			$('#content-container').replaceWith(data);
		})
		scrollToContent();
		$('#search-page').addClass('active');
		$('#search-page').siblings().removeClass('active');	
	})
	$('#info-page').on('click', () => {
		$.get('components/info.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
		scrollToContent();
		$('#info-page').addClass('active');
		$('#info-page').siblings().removeClass('active');
	})

	$('#contact-page').on('click', () => {
		$.get('components/contact.html', (data) => {
			$('#content-container').replaceWith(data);
		})	
		scrollToContent();
		$('#contact-page').addClass('active');
		$('#contact-page').siblings().removeClass('active');
	})

	$('#about-page').on('click', () => {
		$.get('components/about.html', (data) => {
			$('#content-container').replaceWith(data);
		})
		scrollToContent();
		$('#about-page').addClass('active');
		$('#about-page').siblings().removeClass('active');	
	})

	$('#account-page').on('click', () => {
		$.get('components/account.html', (data) => {
			$('#content-container').replaceWith(data);
		})
		scrollToContent();
	})

	$('#milestone-page').on('click', () => {
		$.get('components/milestone.html', (data) => {
			$('#content-container').replaceWith(data);
		})
		scrollToContent();
	})
});

function scrollToContent()
{
	$('html, body').animate({scrollTop: $('#content-container').offset().top -50}, 1000);
}

