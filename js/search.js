houseData = '';
priceSlider = document.getElementById("priceSlider");
priceOutput = document.getElementById("priceText");
sizeSlider = document.getElementById("distanceSlider");
sizeOutput = document.getElementById("distanceText");
citySlider = document.getElementById("citySlider");
citySliderOutput = document.getElementById("citySliderText");
showOptions = false;

$(document).ready(()=> {

	$.getJSON('assets/wee_mock_data.json', (data) => {
		houseData = data;
		for (let i = 0; i < houseData.length; i++) {
			populateResults(houseData[i], i);
		}
	});

	$('#search-options-toggler').on("click", () => {
		if (showOptions) {
			showOptions = false;
			$('.toggle-btn').addClass('active');
			$('#search-options-text').html('<p>HIDE ADDITIONAL SEARCH OPTIONS</p>');
		} else {
			showOptions = true;
			$('.toggle-btn').removeClass('active');
			$('#search-options-text').html('<p>SHOW ADDITIONAL SEARCH OPTIONS</p>');
		}
		$('.options-container').children().slideToggle(500);

		$('.filter-options-selector').on('click', () => {
			if(showOptions) {
				showOptions = false;
			} else {
				showOptions = true;
			}
			$('.filter-options').toggle();
		});
	});

	document.addEventListener('keydown', function(event) {
		if(event.keyCode === 13) {
			search();
		}
	});
});

priceOutput.innerHTML = priceSlider.value;
sizeOutput.innerHTML = sizeSlider.value;
citySliderOutput.innerHTML = citySlider.value;

priceSlider.oninput = function() {
	priceOutput.innerHTML = this.value;
};

sizeSlider.oninput = function() {
	sizeOutput.innerHTML = this.value;
};

citySlider.oninput = function() {
	citySliderOutput.innerHTML = this.value;
	if (this.value > 51) {
		$('#image-innercity').css({opacity: 0});
		if (this.value > 80) {
			$('#search-title').css({color: '#eee'});
		}
		else {
			$('#search-title').css({color: '#333'});
		}
		outercityvalue = ((50 - this.value) * -2)*0.01 - 0.02;
		console.log(outercityvalue);
		$('#image-outercity').css({opacity: outercityvalue});
	} else if (this.value < 49) {
		$('#image-outercity').css({opacity: 0});
		if (this.value < 20) {
			$('#search-title').css({color: '#eee'});
		} else {
			$('#search-title').css({color: '#333'});
		}
		innercityvalue = (100 - this.value * 2)*0.01 - 0.02;
		console.log(innercityvalue);
		$('#image-innercity').css({opacity: innercityvalue});
	} else {
		$('#search-title').css({color: '#333'});
	}
}

function getHouses(size, price, location) {
	$('.search-content-container').empty();
	for (let i = 0, j = 0; i < houseData.length; i++) {
		let house = houseData[i];
		let city = house.city.toUpperCase();
		let checkCity = (location === '' || location === city);
		let checkSizePrice = (house.size <= size && house.price <= price);
		if ((checkSizePrice && checkCity) || (cityOnly && checkCity)) {
			populateResults(house, j);
			j++;
		}
		if (i === houseData.length - 1 && j === 0) {
			$('.search-content-container').append('<div class="col-sm">No Tiny Houses Found :(</div>')
		}					
	}

}

function search() {
	let searchInput = document.getElementById("searchField").value.toUpperCase();
	let size = sizeSlider.value;
	let price = priceSlider.value * 1000;
	getHouses(size, price, searchInput);
}	

function populateResults(house, i) {
	$('.search-content-container').append(
		'<div class="col col-sm-4 search-item-container" onclick="triggerDetailModal(this)" data-toggle="modal" data-target="#detailModal" data-house-id="' + i + '">' +
		'	<img src="https://www.1limburg.nl/sites/default/files/public/styles/media-paragraph/public/macy-miller-tiny-house-2.jpg?itok=ySmiqYLu" class="img-fluid"/>' +
		'	<div class="row row-padding">' +
		'		<div class="col-sm-1">' +
		'			<i class="fa fa-map-pin"></i>' +
		'		</div>' +
		'		<div class="col-sm-4">' +
		'			<p class="house-location">'+house.city+'</p>' +
		'		</div>' +
		'		<div class="col-sm-4">' +
		'			<p class="house-price"><span class="fa fa-euro-sign"></span>'+house.price+'</p>' +
		'		</div>' +
		'		<div class="col-sm-2">' +
		'			<p class="house-price">'+house.size+'m<sup>2</sup></p>' +
		'		</div>' +
		'	</div>' +
		'</div>'
	);
	if(i%3 === 0) {
		$('.search-content-container').append('</div><div class="row row-padding>');
	} 
}

function triggerDetailModal(elm) {
    lastHouseID = $(elm).data("houseId");
    $("#detailModal").modal('show');
}

$('#detailModal').on('show.bs.modal', function (event) {
    let house = houseData[lastHouseID]; // Button that triggered the modal
    let title = "Tiny House in " + house.city;
    console.log(house);
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    let modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('#detail-house-price').text(house.price);
    modal.find('#detail-house-size').text(house.size);

});