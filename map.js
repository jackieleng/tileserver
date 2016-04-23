var mymap = L.map('mapid').setView([65.005, -20.09], 6);
var localdev_url = 'http://localhost:8080/example/{z}/{x}/{y}.png';
var nginx_url = '/tiles/example/{z}/{x}/{y}.png';
url = nginx_url;

L.tileLayer(url, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);
