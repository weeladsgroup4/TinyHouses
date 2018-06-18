$(document).ready( () => {
	console.log("nav ready");
	// Load landing page content first, then assign handles to contents
    $.get('components/lander.html', (data) => {
        $('#lander-container').replaceWith(data);
        $('#lander-container').on('click', () => {
            console.log("loading search");
            $.get('components/search.html', (data) => {
                $('#content-container').replaceWith(data);
                $('#search-page').addClass('active');
                $('html, body').animate({scrollTop: $('#content-container').offset().top -50}, 2000);
            });
        });

        $('#lander-login-button').on('click', () => {
            console.log("loading login");
            $.get('components/account.html', (data) => {
                $('#content-container').replaceWith(data);
                $('#content-container').hide();
            });
            $('#navigation-container').slideDown(1500, () => {
                $('#content-container').show();
                scrollToContent();
            });
        });
    });

    // Load navigation bar content first, then assign handles to contents
    $.get('components/navigation.html', (data) => {
        $('#navigation-container').replaceWith(data);
        $('#search-page').on('click', () => {
            $.get('components/search.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#search-page').addClass('active');
            $('#search-page').siblings().removeClass('active');
        });
        $('#info-page').on('click', () => {
            $.get('components/info.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#info-page').addClass('active');
            $('#info-page').siblings().removeClass('active');
        });

        $('#contact-page').on('click', () => {
            $.get('components/contact.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#contact-page').addClass('active');
            $('#contact-page').siblings().removeClass('active');
        });

        $('#about-page').on('click', () => {
            $.get('components/about.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#about-page').addClass('active');
            $('#about-page').siblings().removeClass('active');
        });

        $('#account-page').on('click', () => {
            $.get('components/account.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
        });

        $('#milestone-page').on('click', () => {
            $.get('components/milestone.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
        });
    });
    $.get('components/footer.html', (data) => {
        $('#footer-container').replaceWith(data);
    });
});

function scrollToContent()
{
	$('html, body').animate({scrollTop: $('#content-container').offset().top -100}, 1000);
}

