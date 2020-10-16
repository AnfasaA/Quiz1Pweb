function initialize() {
        var myLatlngB = new google.maps.LatLng(1.1377112,104.425400);
        var myLatlngV = new google.maps.LatLng(1.129513,104.034516);
        var mapOptionsB = {
        zoom: 10,
        center: myLatlngB,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0
        }
        var mapOptionsV = {
        zoom: 17,
        center: myLatlngV,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: 0
        }
       
        var mapB = new google.maps.Map(document.getElementById('map-B'), mapOptionsB);
        var mapV = new google.maps.Map(document.getElementById('map-V'), mapOptionsV);
       
        var markerB = new google.maps.Marker({
        position: myLatlngB,
        map: mapB,
        title: 'Bintan'
        });
        var markerV = new google.maps.Marker({
        position: myLatlngV,
        map: mapV,
        title: 'Vihara'
        });
       } 
       
       google.maps.event.addDomListener(window, 'load', initialize);