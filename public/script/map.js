function initMap() {
  var batam = {lat: 1.083, lng: 104.028};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: batam});
  var marker = new google.maps.Marker({position: batam, map: map});
}