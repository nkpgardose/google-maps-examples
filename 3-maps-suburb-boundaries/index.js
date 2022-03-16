/**
 * Generate suburb boundaries.
 */
function generateSuburbBoundaries(map) {
  map.data.loadGeoJson('https://gist.githubusercontent.com/nkpgardose/53f332978d79deb5b6d7298138659231/raw/873706144828152d7cabb5a537e5e30438cbcd7a/some-suburbs.json');

  // Set the global styles.
  map.data.setStyle({
    fillColor: 'green',
    strokeWeight: 1,
    strokeColor: 'green',
  });

  // When the user hovers, tempt them to click by outlining the letters.
  // Call revertStyle() to remove all overrides. This will use the style rules
  // defined in the function passed to setStyle()
  map.data.addListener('mouseover', function(event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, {strokeWeight: 8});
  });

  map.data.addListener('mouseout', function(event) {
    map.data.revertStyle();
  });
}

/**
 * Initialise and add the map
 */
function initMap() {
  // The location of bondi beach
  const harris = { lat: -33.88677113886068, lng: 151.26904062619977 };

  // The map, centered at bondi beach 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: harris,
  });

  // The marker, positioned at bondi beach 
  const marker = new google.maps.Marker({
    position: harris,
    map: map,
  });

  generateSuburbBoundaries(map);
}