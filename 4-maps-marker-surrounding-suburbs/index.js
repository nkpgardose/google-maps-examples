/**
 * Generate suburb boundaries.
 */
function generateSurroundingSuburbBoundaries(map) {
  map.data.loadGeoJson('https://gist.githubusercontent.com/nkpgardose/53f332978d79deb5b6d7298138659231/raw/873706144828152d7cabb5a537e5e30438cbcd7a/some-suburbs.json');

  // Set the global styles.
  map.data.setStyle({
    fillColor: 'green',
    strokeWeight: 1,
    strokeColor: 'green',
  });

  map.data.addListener('mouseover', function (event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { strokeWeight: 8 });
  });

  map.data.addListener('mouseout', function (event) {
    map.data.revertStyle();
  });
}

/**
 * Initialise and add the map
 */
function initMap() {
  const somewhereInBondi = { lat: -33.88677113886068, lng: 151.26904062619977 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: somewhereInBondi,
  });

  const marker = new google.maps.Marker({
    position: somewhereInBondi,
    map: map,
  });

  /**
   * Display a visible circle
   */
  const circle = new google.maps.Circle({
    map: map,
    radius: 1000, // in meters
  });
  circle.bindTo('center', marker, 'position');

  /**
   * Initialise Google place
   */
  const places = new google.maps.places.PlacesService(map);
  const options = {
    location: somewhereInBondi,
    radius: 10000, // in meters
    type: ['postal_code']
  };
  const callback = (results, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.warn('Places service is not working');
      return;
    }

    console.log('status', status);
    /**
     * The result here contains a list of object with postal codes.
     * It is up to your API to filter boundaries and apply them to the maps.
     * I imagine an API that accepts a list of zipcodes and returns respective
     * GeoJSONs.
     */
    console.log('results', results);
  }
  places.nearbySearch(options, callback);

  generateSurroundingSuburbBoundaries(map);
}