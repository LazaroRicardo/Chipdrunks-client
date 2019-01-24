function initMap(bares) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: { lat: 40.4630446, lng: -3.6767929 }
  });



  if (bares) for (let index = 0; index < bares.length; index++) {
    //
    let bar = bares[index];

    let barmarker = new google.maps.Marker({
      position: { lat: bar.latitud, lng: bar.longitud },
      map: map,
      icon: './assets/img/cervezanew.png',
      info: new google.maps.InfoWindow({
        content: `<div class="barinfo"><div class="bar"><h5>${bar.nombre}</h5></div><div class="texto">${bar.descripcion}</div><div><a href="/bares/${bar.bid}" class="info"> mas info</a></div></div>`
      }),
    });

    google.maps.event.addListener(barmarker, 'click', function () {
      barmarker.info.open(map, barmarker);
    });

    map.panTo(barmarker.getPosition());
  }

}


$.ajax({
  url: "http://localhost:8080/Chipdrunks/api/bares",
  crossDomain: true,
  //dataType: 'jsonp',
}).done(function (data) {
  console.log(data);
  initMap(data);
});