/* js by Melissa Crocker, 2021 */

//function to instantiate the map
$(document).ready(function() {

		var cities;	
		var map = L.map('map', { 
			center: [37.8, -96], 
			zoom: 4,	
			minZoom: 4
		});
	
		 //add mapbox tilelayer
		 var light = L.tileLayer( 
			'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmF2ZW5uYTkiLCJhIjoiY2tnaGN4Y3U2MDNpODJycWF0a3R4OG9wNiJ9.8g_TnO4J5iEjeQxdFEV-Eg', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),
            dark = L.tileLayer(
                'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmF2ZW5uYTkiLCJhIjoiY2tncHo1M2RwMG9ydjJ5cDM1aXZqazh4bCJ9.yXacz8jEmzM0ZYLzFlWHmA', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'});
			
        light.addTo(map);
    
        //create basemap control
        /*var baseMaps = {
        "Light": light,
        "Dark": dark
        };
    
        L.control.layers(baseMaps).addTo(map);*/
});