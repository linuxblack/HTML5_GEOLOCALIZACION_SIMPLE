function geolocalizacion(){
	navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        $.get('http://ws.geonames.org/countryCode', {
        	type: "JSON", 
            lat: latitude, 
            lng: longitude
        }, function(data) { 
            alert("Estás en: " + data.countryName);
        });
    });
}