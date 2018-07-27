window.onload = () => {

var position = window.navigator.geolocation;
var opciones = {
    enableHighAccuracy:true,
    timeout:45000}

navigator.geolocation.getCurrentPosition(mostrarCoords,error,opciones)
}



function mostrarCoords(pos){
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

};

map = new google.maps.Map(document.getElementById('map'), {
        zoom:20, 
        center:punto,
        mapTypeId:google.maps.mapTypeId.ROADMAP


    });

var punto = new google.maps.latLng(pos.coords.latitude,pos.coords.longitude)

        
let marca = new google.maps.Marker({
        icon:"img/ubicacion.png",
        position:punto,
        map:mapa,
        title:"Aqui estás"})    
    
function error(err){
    alert(err)
}


