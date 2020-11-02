
document.getElementById("hae").addEventListener("click", loadData);

const xmlFile = "data.xml";

/**
 * loadData - Hakee datan xml-tiedostosta
 */
function loadData(){
        
        var ajax = new XMLHttpRequest();
        ajax.onload = function(){
           console.log(ajax.responseXML);
           showData( this.responseXML, "viestit" );
        }
        ajax.open("GET", xmlFile, true);
        ajax.send();

}
/**
 * showData - Näyttää annetun XML-datan valitussa UL-elementissä
 * @param {xmlObject} xmlData 
 * @param {string} targetUl 
 */
function showData(xmlData, targetUl){


}