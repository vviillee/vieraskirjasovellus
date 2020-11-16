
//document.getElementById("hae").addEventListener("click", loadData);
document.getElementById("btnSend").addEventListener("click", saveData);
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


        //määritellään kohde
        let htmlTarget = document.getElementById(targetUl);
        htmlTarget.innerHTML=""

        let viestit = xmlData.getElementsByTagName("viesti");

        for (var i=0; i<viestit.length; i++) {
                var viesti = viestit[i].childNodes[0].nodeValue;
                var lähettäjä = viestit[i].attributes.getNamedItem('lähettäjä').nodeValue;

                // luodaan li-elementti
                var li = document.createElement("li");
                var linkText = document.createTextNode(viesti);
                var nimi = document.createElement("span")
                var nimiText = document.createTextNode(lähettäjä);
                var a = document.createElement("a");
                var aText = document.createTextNode("poista");

                a.appendChild(aText);
                nimi.appendChild(nimiText);
                li.appendChild(linkText);
                li.appendChild(nimi);
                li.appendChild(a);
                

                htmlTarget.appendChild(li)
          }       

}

function saveData()
{
        event.preventDefault();
        var ajax = new XMLHttpRequest();
        ajax.onload = function(){
                console.log(ajax.responseText);
                loadData();
        }
        formData = new FormData(document.forms["lomake"]);
        ajax.open("POST", "save.php", true);
        ajax.send(formData);
}