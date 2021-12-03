<script >
import Breadcrumb from '@/components/Breadcrumbs.vue'


export default {
  components: {    Breadcrumb  },
  mounted(){
    var map = L.map('map', { trackResize: false }).setView([55.858558, 37.840353], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var circle = L.circle([55.858558, 37.810353], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


    var polygon = L.polyline([
    [55.888558, 37.840353],
    [55.858558, 37.840353],
    [55.858558, 37.880353],
    [55.835558, 37.810353],
    [55.845558, 37.710353]
]).addTo(map);


  }
}
</script>

<template>
  <div class="container mx-auto">
     <Breadcrumb parentTitle='Навигация' />

    <div class="mt-10">
      <div id="map" style="height:70vh">
      </div>
    </div>
  </div>
</template>
