$(document).ready( () => {
	console.log("nav ready");
	// Load landing page content first, then assign handles to contents
    $.get('components/lander.html', (data) => {
        $('#lander-container').replaceWith(data);
        $('#lander-container').on('click', () => {
            $('html, body').animate({scrollTop: $('#second-lander-container').offset().top -0}, 2000);
        });
    });
    $.get('components/second-lander.html', (data) => {
        $('#second-lander-container').replaceWith(data);

        $('#second-lander-buy').on('click', () => {
            $.get('components/search.html', (data) => {
                $.get('components/details.modal.html', (data2) => {
                    $('#content-container').replaceWith(data + data2);
                    $('#search-page').addClass('active').siblings().removeClass('active');
                });
            });
            $('html, body').animate({scrollTop: $('#content-container').offset().top -100}, 2000);          
        });
        $('#second-lander-sell').on('click', () => {
            $.get('components/account.html', (data) => {
                $('#content-container').replaceWith(data);
                $('#account-page').addClass('active').siblings().removeClass('active');
            });
            $('html, body').animate({scrollTop: $('#content-container').offset().top -100}, 2000);
        });
        $('#second-lander-about').on('click', ()=> {
            $.get('components/about.html', (data) => {
                $('#content-container').replaceWith(data);
                $('#about-page').addClass('active').siblings().removeClass('active');
            })
            $('html, body').animate({scrollTop: $('#content-container').offset().top -100}, 2000);
        });
    });

    // Load navigation bar content first, then assign handles to contents
    $.get('components/navigation.html', (data) => {
        $('#navigation-container').replaceWith(data);
        $('#search-page').on('click', () => {
            $.get('components/search.html', (data) => {
                $.get('components/details.modal.html', (data2) => {
                    $('#content-container').replaceWith(data + data2);
                });
            });
            scrollToContent();
            $('#search-page').addClass('active').siblings().removeClass('active');
        });
        $('#info-page').on('click', () => {
            $.get('components/info.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#info-page').addClass('active').siblings().removeClass('active');
        });

        $('#contact-page').on('click', () => {
            $.get('components/contact.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#contact-page').addClass('active').siblings().removeClass('active');
        });

        $('#about-page').on('click', () => {
            console.log('clicked about page');
            $.get('components/about.html', (data) => {
                $('#content-container').replaceWith(data);
            });
            scrollToContent();
            $('#about-page').addClass('active').siblings().removeClass('active');;
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

