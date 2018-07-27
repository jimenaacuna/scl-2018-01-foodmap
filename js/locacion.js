class UserLocation{
    constructor(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((localizacion)=>{
    
            })
        }else{
            alert("tu navegador no soporta geolocalizacion")
        }

    }
}