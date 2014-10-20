//Client id
//HEF1ZRBBHNI532L2WNTOA0TMDDXL4RLG4E1ROV0M5V3SKJIY

//Client secret
//RFF1AAYFPZTHPC24OO0CKA3DN45P4J4LKVYCUHFFN4Z5NZYB


//To make a userless request, specify your consumer key's Client ID and Secret instead of an auth token in the request URL.

	var lat = $('.lat')
	var lon = $('.lon')

	//generating list of 10 nearest coffee shops using:
		//lat + lon (only user input)
		//radius = 50000 meters > 30mi
		//intent=browse
		//limit=10
		//categoryId coffee shops

$('button').on('click', function(event){
	event.preventDefault();
	var list = $('.list');
	list.show();
	
	venueUrl = 'https://api.foursquare.com/v2/venues/search?client_id=HEF1ZRBBHNI532L2WNTOA0TMDDXL4RLG4E1ROV0M5V3SKJIY&client_secret=RFF1AAYFPZTHPC24OO0CKA3DN45P4J4LKVYCUHFFN4Z5NZYB&ll=' + lat + ',' + lon + '&limit=10&intent=browse&categoryId=4bf58dd8d48988d1e0931735&radius=60000&v=20141130&m=foursquare'
	$.ajax({
		type: 'GET',
		url: venueUrl,
		success: function(result){
			console.log("yay")
		}
	});

	//var list = $('.list');
	//name, address are Foursquare API venue response fields. Need to figure out how to access them.
	list.html('<li>Name:' + name + 'at' + address + '</li>');

})

//test this out w/NYC location
	//https://api.foursquare.com/v2/venues/search?client_id=HEF1ZRBBHNI532L2WNTOA0TMDDXL4RLG4E1ROV0M5V3SKJIY&client_secret=RFF1AAYFPZTHPC24OO0CKA3DN45P4J4LKVYCUHFFN4Z5NZYB&ll=40.7,-74&limit=10&intent=browse&categoryId=4bf58dd8d48988d1e0931735&radius=40000&v=20141130&m=foursquare
//IT WORKS!

//this url returns all resulting venues for query "coffee" in the city (default foursquare vicinity) 40.7, -74 (lat, lon) or Brooklyn Bridge Park Greenway Brooklyn, NY 11201
//'https://api.foursquare.com/v2/venues/search?client_id=HEF1ZRBBHNI532L2WNTOA0TMDDXL4RLG4E1ROV0M5V3SKJIY&client_secret=RFF1AAYFPZTHPC24OO0CKA3DN45P4J4LKVYCUHFFN4Z5NZYB&ll=40.7,-74&query=coffee&v=20141130&m=foursquare'


  //cvenues/categories
  //food 4d4b7105d754a06374d81259
  	//coffee shop 4bf58dd8d48988d1e0931735

 $(document).ready(find);