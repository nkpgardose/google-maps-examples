/**
 * Generate Domain using GeoJSON with styles 
 */
function generateDomainGeoJSON(map) {
  map.data.loadGeoJson('https://gist.githubusercontent.com/nkpgardose/e657d33165564531ac401e85250ebd66/raw/a380b0e744ad3a7ccab341fbb734c744a86bd8fb/domain.json');

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
 * Initialise map
 */
function initMap() {
  // The location of 100 harris
  const harris = { lat: -33.868230348126524, lng: 151.19374128193968 };

  // The map, centered at 100 harris
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: harris,
  });

  // The marker, positioned at 100 harris
  const marker = new google.maps.Marker({
    position: harris,
    map: map,
  });

  generateDomainGeoJSON(map);
}
