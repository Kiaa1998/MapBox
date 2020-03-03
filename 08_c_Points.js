// WORKING WITH MAPS //
// var distance = calcGeoDistance(lat1, lon1, lat2, lon2, "km"); // how to calculate distance

let myMap; // creates variable to hold Map
let canvas; // creates variable to hold canvases
const mappa = new Mappa('Leaflet'); // creates a new map

var duomoLat = 45.4641013; // sets latitude for Duomo
var duomoLon = 9.1897325; // sets longitude for Duomo

// Lets put all our map options in a single object
const options = { // sets standard view on load
  lat: duomoLat,
  lng: duomoLon,
  zoom: 13,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png" // picks maps style
}

function preload(){
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); // sets map to canvas size
}

function draw() {
  clear();

  var point = myMap.latLngToPixel(duomoLat, duomoLon); // creates point converting latitude and longitude to pixels
  fill(255, 0, 0);
  noStroke();
  ellipse(point.x, point.y, 10)
}
