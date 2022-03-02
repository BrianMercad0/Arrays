function myFunction() {

    var selectContinent = ["Europe","Asia","North America"];
    var arrEurope = ["England","France","Germany","Ireland","Poland"];
    var arrAsia = ["India","China","North Korea","Japan","Philpine"];
    var arrNAmerica = ["United States","Mexico","Canada"];
    
    var selectoptions = (document.getElementById("continent").value);
    var displayCountries = document.getElementById("countries");
    
    document.getElementById("countries").innerHTML="";
    
    
    if (selectoptions == "Europe"){
        for (i=0;i<arrEurope.length;i++){
            var soptions = document.createElement('option');
            soptions.innerHTML=arrEurope[i];
            soptions.value=arrEurope[i];
            displayCountries.appendChild(soptions);
        }
    }
    
    else if (selectoptions == "Asia"){
        for (i=0;i<arrAsia.length;i++){
            var soptions = document.createElement('option');
            soptions.innerHTML=arrAsia[i];
            soptions.value=arrAsia[i];
            displayCountries.appendChild(soptions);
        }
    }
    
    else {


        for (i=0;i<arrNAmerica.length;i++){
            var soptions = document.createElement('option');
            soptions.innerHTML=arrNAmerica[i];
            soptions.value=arrNAmerica[i];
            displayCountries.appendChild(soptions);
        }
}
}