// MAPBOX: fancy maps //
// var distance = calcGeoDistance(lat1, lon1, lat2, lon2, "km"); // how to calculate distance


let myMap; // creates variable to hold Map
let canvas; // creates variable to hold canvases
let position;
const mappa = new Mappa('MapboxGL', "pk.eyJ1Ijoia2lhYTE5OTgiLCJhIjoiY2s0c21leTR2MWs1eTNtdDI0eHExcGRtYiJ9.HhpcAYDQMHv8e-8UIFQX2A");
// Sets map using MapboxGL
var duomoLat = 45.4641013; // sets latitude for Duomo
var duomoLon = 9.1897325; // sets longitude for Duomo

// Lets put all our map options in a single object
const options = { // sets standard view on load
  lat: duomoLat,
  lng: duomoLon,
  zoom: 12,
  // style: "mapbox://styles/mapbox/traffic-night-v2", // alternative map styles
  style: 'mapbox://styles/mapbox/streets-v11',
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
  //
  // var point = myMap.latLngToPixel(duomoLat, duomoLon);
  // noFill();
  // stroke(255, 255, 0);
  // ellipse(point.x, point.y, position.accuracy); // position.accuracy value undefined
  // ellipse(point.x, point.y, 10);

  var point2 = myMap.latLngToPixel(duomoLat, duomoLon); // creates point converting latitude and longitude to pixels
  fill(0, 255, 0);
  noStroke();
  ellipse(point2.x, point2.y, 10)

}


// CANNOT ACCESS CUSTOM MAPS!?
// TOKEN SEEMS NOT TO WORK
