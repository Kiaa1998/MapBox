// MAPBOX: fancy maps //
// var distance = calcGeoDistance(lat1, lon1, lat2, lon2, "km"); // how to calculate distance

// DOES NOT LOAD PERSONALIZED STYLES //

let myMap; // creates variable to hold Map
let canvas; // creates variable to hold canvases
let position;
const mappa = new Mappa('MapboxGL', "pk.eyJ1Ijoia2lhYTE5OTgiLCJhIjoiY2s0c21leTR2MWs1eTNtdDI0eHExcGRtYiJ9.HhpcAYDQMHv8e-8UIFQX2A");
// Sets map using MapboxGL
// pk.eyJ1Ijoia2lhYTE5OTgiLCJhIjoiY2s0c2w3Y3N5MDAwZzNsbjQ3anloMzcyNCJ9.R4QyufGr81SJ-fdz5P1ydQ is the access token to keep your Mapbox account safe

var duomoLat = 45.4641013; // sets latitude for Duomo
var duomoLon = 9.1897325; // sets longitude for Duomo

// Lets put all our map options in a single object
const options = { // sets standard view on load
  lat: duomoLat,
  lng: duomoLon,
  zoom: 12,
  studio: true, // sets variable to change map in Mapbox Studio
  style: "https://api.mapbox.com/styles/v1/{kiaa1998}/{ck4spchvc1pxq1cpu9x2vodd6}?access_token=pk.eyJ1Ijoia2lhYTE5OTgiLCJhIjoiY2s0c21leTR2MWs1eTNtdDI0eHExcGRtYiJ9.HhpcAYDQMHv8e-8UIFQX2A", // sets my PERSONALIZED STYLE   
}


function preload(){
  // position = getCurrentPosition();
  // console.log(position)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  // myMap.overlay(canvas); // sets map to canvas size
}

function draw() {
  clear();

  // var point = myMap.latLngToPixel(position.latitude, position.longitude);
  var point = myMap.latLngToPixel(duomoLat, duomoLon);
  noFill();
  stroke(0);
  ellipse(point.x, point.y, 10); // position.accuracy value undefined
  // ellipse(point.x, point.y, 10);
}
