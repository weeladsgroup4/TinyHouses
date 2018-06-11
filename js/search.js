houseData = '';
priceSlider = document.getElementById("priceSlider");
priceOutput = document.getElementById("priceText");
sizeSlider = document.getElementById("distanceSlider");
sizeOutput = document.getElementById("distanceText");
showOptions = false;

$(document).ready(()=> {

	$.getJSON('assets/wee_mock_data.json', (data) => {
		houseData = data;
		for (let i = 0; i < houseData.length; i++) {
			populateResults(houseData[i], i);
		}
	});
	$('.filter-options').hide();
	$('input[type=checkbox]').on("click", ()=>{
        cityOnly = !cityOnly;
		$('.options-container').children().toggle();
	});

	$('.filter-options-selector').on('click', () => {
		if(showOptions) {
			showOptions = false;
			$('.filter-options-selector').html('<button class="btn btn-lg btn-block search-button">SHOW MORE OPTIONS</button>');
		} else {
			showOptions = true;
			$('.filter-options-selector').html('<button class="btn btn-lg btn-block search-button">HIDE MORE OPTIONS</button>');
		}
		$('.filter-options').toggle();
	});

	$('#innercity-toggle').on('click', () => {
		if(innerCity) {
			innerCity = false;
			$('#innercity-toggle').html('<button class="btn btn-lg btn-block search-button"><p>INCLUDE INNER CITY HOUSES</p></button>');
		} else {
			innerCity = true;
			$('#innercity-toggle').html('<button class="btn btn-lg btn-block search-button"><p>EXCLUDE INNER CITY HOUSES</p></button>');
		}
	});

	$('#outercity-toggle').on('click', () => {
		if(outerCity) {
			outerCity = false;
			$('#outercity-toggle').html('<button class="btn btn-lg btn-block search-button"><p>INCLUDE OUTER CITY HOUSES</p></button>');
		} else {
			outerCity = true;
			$('#outercity-toggle').html('<button class="btn btn-lg btn-block search-button"><p>EXCLUDE OUTER CITY HOUSES</p></button>');
		}
	});

	document.addEventListener('keydown', function(event) {
		if(event.keyCode === 13) {
			search();
		}
	});
});

priceOutput.innerHTML = priceSlider.value;
sizeOutput.innerHTML = sizeSlider.value;

priceSlider.oninput = function() {
	priceOutput.innerHTML = this.value;
};

sizeSlider.oninput = function() {
	sizeOutput.innerHTML = this.value;
};
// type = false --innercity
// type = true --outercity
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
		// ignore this line
		'<div class="col col-sm-4">' +
		'	<img src="https://www.1limburg.nl/sites/default/files/public/styles/media-paragraph/public/macy-miller-tiny-house-2.jpg?itok=ySmiqYLu" class="img-fluid img-thumbnail"/>' +
		'	<div class="row row-padding">' +
		'		<div class="col-sm-6">' +
		'			<p><span class="fa fa-map-pin"></span>'+house.city+'</p>' +
		'		</div>' +
		'		<div class="col-sm-6">' +
		'			<p>'+house.longitude + ', ' + house.latitude + '</p>' +
		'		</div>' +
		'	</div>' +
		'	<div class="row row-padding">' +
		'		<div class="col-sm-6">' +
		'			<p><span class="fa fa-euro-sign"></span>'+house.price+'</p>' +
		'		</div>' +
		'		<div class="col-sm-6">' +
		'			<p>'+house.size+'m<sup>2</sup></p>' +
		'		</div>' +
		'	</div>' +
		'	<div class="row row-padding">' +
		'		<div class="col-sm-12">' +
		'			<button type="button" class="btn btn-lg btn-block primary-button">VIEW DETAILS</button>' +
		'		</div>' +
		'	</div>' +
		'</div>'
	);
	if(i%3 === 0) {
		$('.search-content-container').append('</div><div class="row row-padding>');
	} 
}	