"use strict";function initMap(){if("object"===("undefined"==typeof google?"undefined":_typeof(google))&&"object"===_typeof(google.maps)){var e={lat:53.907423,lng:27.436724},t={lat:59.91273,lng:10.74609},l={lat:55.67594,lng:12.56553},o={lat:48.85341,lng:2.3488},n={lat:41.38879,lng:2.15899},a={lat:-15.77972,lng:-47.92972},r={lat:36.7525,lng:3.04197},s={lat:-33.92584,lng:18.42322},i={lat:-33.86785,lng:151.20732},m={lat:39.9075,lng:116.39723},p={lat:35.6895,lng:139.69171},y={lat:47.90771,lng:106.88324},c={lat:41.89193,lng:12.51133},g={lat:41.85003,lng:-87.65005},u={lat:55.7435,lng:-97.85579},f=new google.maps.Map(document.getElementById("map"),{zoom:3,minZoom:3,center:r,gestureHandling:"greedy",styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]});new google.maps.Marker({position:e,map:f}),new google.maps.Marker({position:t,map:f}),new google.maps.Marker({position:l,map:f}),new google.maps.Marker({position:o,map:f}),new google.maps.Marker({position:n,map:f}),new google.maps.Marker({position:a,map:f}),new google.maps.Marker({position:r,map:f}),new google.maps.Marker({position:s,map:f}),new google.maps.Marker({position:i,map:f}),new google.maps.Marker({position:m,map:f}),new google.maps.Marker({position:p,map:f}),new google.maps.Marker({position:y,map:f}),new google.maps.Marker({position:c,map:f}),new google.maps.Marker({position:g,map:f}),new google.maps.Marker({position:u,map:f})}else{var d=document.getElementById("map"),k=document.createElement("H4"),T=document.createTextNode("Error loading map, please reload page");k.appendChild(T),d.appendChild(k)}}function checkVisible(e){var t=e.getBoundingClientRect(),l=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-l>=0)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},news=document.getElementsByClassName("news"),newsItem=document.getElementsByClassName("news-item"),quick=document.getElementsByClassName("quick"),quickItem=document.getElementsByClassName("quick-item"),hamburger=document.getElementsByTagName("nav"),menu=document.getElementById("menu"),close=document.getElementById("close");window.addEventListener("load",function(){if(checkVisible(news[0]))for(var e=0;e<newsItem.length;e++)newsItem[e].children[0].style.transform="translateX(0)",newsItem[e].children[0].style.transition="transform 1s ease-out";if(checkVisible(quick[0]))for(var t=0;t<quickItem.length;t++)quickItem[t].style.transform="translateX(0)",quickItem[t].style.transition="transform 1s ease-out"}),window.addEventListener("scroll",function(){if(checkVisible(news[0]))for(var e=0;e<newsItem.length;e++)newsItem[e].children[0].style.transform="translateX(0)",newsItem[e].children[0].style.transition="transform 1s ease-out";if(checkVisible(quick[0]))for(var t=0;t<quickItem.length;t++)quickItem[t].style.transform="translateX(0)",quickItem[t].style.transition="transform 1s ease-out"}),hamburger[0].addEventListener("click",function(){menu.style.right="0"}),close.addEventListener("click",function(){menu.style.right="-200px",event.stopPropagation()});