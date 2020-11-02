
document.getElementById("hae").addEventListener("click", loadData);

const xmlFile = "data.xml";

/**
 * loadData - Hakee datan xml-tiedostosta
 */
function loadData(){

        var ajax = new XMLHttpRequest();
        ajax.onload = function(){
            alert('valmis');
        }
        ajax.open("GET", xmlFile, true)
        ajax.send();
}