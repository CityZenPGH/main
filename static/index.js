(function(){
  var firebaseConfig = {
      apiKey: "AIzaSyCzSHHJ_u3vD2R2_CX3013GAl-8rYE58r0",
      authDomain: "cityzen-280417.firebaseapp.com",
      databaseURL: "https://cityzen-280417.firebaseio.com",
      projectId: "cityzen-280417",
      storageBucket: "cityzen-280417.appspot.com",
      messagingSenderId: "618311008905",
      appId: "1:618311008905:web:a77b2048f7ec8c25e4bc58",
      measurementId: "G-7PWPK9YNFN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Generate a random Firebase location
  var database = firebase.database().ref().push();
  
  // Create a new GeoFire instance at the random Firebase location
  var geoFireInstance = new geofire.GeoFire(database);

  var showMap = function initMap(latitude, longitude){
      var curLoc = {lat: latitude, lng: longitude};
      var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: curLoc});
  }
  
  /* Uses the HTML5 geolocation API to get the current user's location */
  var getLocation = function() {
      if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
      log("Asking user to get their location");
      navigator.geolocation.getCurrentPosition(geolocationCallback);
      } else {
      log("Your browser does not support the HTML5 Geolocation API, so this demo will not work.")
      }
  };
  
  /* Callback method from the geolocation API which receives the current user's location */
  var geolocationCallback = function(location) {
      var latitude = location.coords.latitude;
      var longitude = location.coords.longitude;

      showMap(latitude, longitude);
  }
  
  // Get the current user's location
  getLocation();
})();

