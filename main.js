
document.getElementById("hae").addEventListener("click", loadData);

const xmlFile = "data.xml";

function loadData(){
    var ajax = new XMLHttpRequest
    ajax.onload = function(){
        console.log(ajax.responseXML);
        showData(this.responseXML, "viestit");   
    }
    ajax.open("GET", xmlFile, true);
    ajax.send();

}
/**
 * 
 * @param {xmlObject} xmlData 
 * @param {string} targetUL 
 */
function showData(xmlData, targetUL){

}