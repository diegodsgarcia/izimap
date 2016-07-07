function IziMap(element, lat, lng) {
  var mapConfig, mainMap;

  if(lat || lng) {
    mapConfig = {
      element: element,
      lat: lat,
      lng: lng
    }

    mainMap = new google.maps.Map(document.getElementById(mapConfig.element), {
      center: { lat: mapConfig.lat, lng: mapConfig.lng },
      zoom: 16
    });
  } else {
    mapConfig = {element: element};

    mainMap = new google.maps.Map(document.getElementById(mapConfig.element), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16
      });
  }

  var geocoder = new google.maps.Geocoder();

  // ================ METHODS ==============================
  this.setAddress = function(address) {
    geocoder.geocode({'address' : address}, function(results, status) {
      if(status === google.maps.GeocoderStatus.OK) {
        mapConfig.address = results[0].geometry.location;
        mainMap.setCenter(mapConfig.address);
      } else {
        mapConfig.address = status;
      }
    });
  }

  this.setCoordenate = function(lat, lng) {
    mainMap.setCenter({lat: lat, lng: lng});
  }

  this.addressToCoordenate = function(address, callback) {
    address.forEach(function(data) {
      geocoder.geocode({ 'address' : data}, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK) {
          callback(results[0].geometry.location.lat(), results[0].geometry.location.lng(), status);
        } else {
          callback(results[0].geometry.location.lat(), results[0].geometry.location.lng(), status);
        }
      });
    });
  }

  this.coordenateToAddress = function(latLng, callback) {
    latLng.forEach(function(data) {
      geocoder.geocode({ 'location': data }, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK) {
          callback(results[1].formatted_address, status);
        } else {
          callback(results[1].formatted_address, status);
        }
      })
    })
  }

  this.setMarkAddress = function(address) {
    address.forEach(function(data) {
      geocoder.geocode({ 'address' : data}, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: mainMap,
          });

        } else {
          console.log('Fail' + status);
        }
      })
    })
  }

  this.setMarkCoordenate = function(latLng) {
    latLng.forEach(function(data) {
      var marker = new google.maps.Marker({
        position: {lat: data.lat, lng: data.lng},
        map: mainMap
      })
    })
  }

  this.setMarkAddressWindow = function(address, contentString) {
    for (var i = 0; i < address.length; i++) {
      geocoder.geocode({ 'address' : address[i]}, (function(results, status) {
        var j = i;
        return function(results, status) {
          if(status === google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: mainMap
            });

            var infoWindow = new google.maps.InfoWindow({
              content: contentString[j]
            });

            marker.addListener('click', function() {
              infoWindow.open(mainMap, marker);
            })

          } else {
            console.log('Fail' + status);
          }
        }
      })() );
    }
  }

  this.setMarkCoordenateWindow = function(latLng, contentString) {
    for (var i = 0; i < latLng.length; i++) {

      var marker = new google.maps.Marker({
        position: { lat: latLng[i].lat, lng: latLng[i].lng },
        map: mainMap
      });

      marker.addListener('click', ( function() {
        var j = i;
        var m = marker;
        return function() {
          var infoWindow = new google.maps.InfoWindow({
            content: contentString[j]
          });
          infoWindow.open(mainMap, m);
        }
      })());
    }
  }




}
