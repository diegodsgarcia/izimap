# IziMap
Just a lib of Javascript to implement maps the easy way,  that using the Google API Maps

#How to use?
The first step, you must link in your html the Google Maps API with your Key security 
```js
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY"> </script>
```

After that you just need link the lib IziMap and instantiating.

```js
<script src="js/izi-map.js"> </script>

<script>
  var map = new IziMap('map');
</script>

<div id="map">

</div>
```
The first params of constructor is the element ID. You can initialize with the coordenate if you want.
```js
var map = new IziMap('map', lat, lng);

```

#Methods
- **setCoordenate** - Set coordenate in your map
```js
map.setAddress('Your address')
```
- **setAddress** - Set address in your map
```js
map.setCoordenate(lat, lng)
```
- **addressToCoordenate** - Convert some Address to Coordenate which return a function callback
```js
map.addressToCoordenate(['Address 1', 'Address 2'], function(lat, lng, status) {
    console.log(lat, lng, status);
});
```
- **coordenateToAddress** - Convert some Coordenate to Address which return a function callback 
```js
map.coordenateToAddress([
  {lat : someLat, lng: someLng},
  {lat: someLat, lng: someLng}], 
  function(address, status) {
      console.log(address);
  });

```
- **setMarkAddress** - Set a simple Mark with Address in your Map 
```js
map.setMarkAddress(['Address 1', 'Address 2']);
```
- **setMarkAddressWindow** - Set a simple Mark with address and open a window, when you click on some Mark.
```js
map.setMarkAddressWindow(['Address 1', 'Address 2'], ['<h1> Test1 </h1>', '<h3> Test2 </h3>']);
```
- **setMarkCoordenate** - Set a simple Mark with some Coordenate in your Map
```js
map.setMarkCoordenate([{lat : someLat, lng: someLng}, {lat: someLat, lng: someLng}]);
```
-***setCoordenateWindow** - Set a simple Mark with coordenate and open a window, when you click on some Mark
```js
map.setMarkCoordenateWindow([{lat : someLat, lng: someLng}, {lat: someLat, lng: someLng}],
                            [ '<h1> Test1 </h1>', '<h3> Test2 </h3>']);
```


