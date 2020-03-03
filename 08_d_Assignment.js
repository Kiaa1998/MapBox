// WORKING WITH MAPS //
// var distance = calcGeoDistance(lat1, lon1, lat2, lon2, "km"); // how to calculate distance

var position;
let myMap; // creates variable to hold Map
let canvas; // creates variable to hold canvases
const mappa = new Mappa('Leaflet'); // creates a new map
var duomoLat = 45.4641013; // sets latitude for Duomo
var duomoLon = 9.1897325; // sets longitude for Duomo

// Lets put all our map options in a single object
const options = { // sets standard view on load
  lat: 45,
  lng: 10,
  zoom: 6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png" // picks maps style
}

function preload(){
  position = getCurrentPosition();
  console.log(position);
  // console.log(position.latitude);
  // console.log(position.longitude);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); // sets map to canvas size

  currentLat = position.latitude; // sets currentLat with located latitude
  currentLon = position.longitude; // sets currentLon with located longitude
}

function draw() {
  clear();

  var point = myMap.latLngToPixel(currentLat, currentLon); // creates point converting latitude and longitude to pixels
  fill(255, 0, 0);
  noStroke();
  ellipse(point.x, point.y, 10)

  var point2 = myMap.latLngToPixel(duomoLat, duomoLon); // creates point converting latitude and longitude to pixels
  fill(0, 255, 0);
  noStroke();
  ellipse(point2.x, point2.y, 10)

  var distance = calcGeoDistance(duomoLat, duomoLon, currentLat, currentLon);
  strokeWeight(4);
  stroke(0,0,255);
  line(point.x, point.y, point2.x, point2.y);
}
