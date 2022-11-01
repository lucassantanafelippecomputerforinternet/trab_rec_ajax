function acionarRequest(){

    let pedido = new XMLHttpRequest();

    pedido.onload = function(){
        let txtDados = lerXML(this);
        document.getElementById("texto").innerHTML = txtDados;
    }

    pedido.open("GET","music.xml");
    pedido.send();
}

function lerXML(xml){
    let xmlDoc = xml.responseXML;
    let dadosXml = xmlDoc.getElementsByTagName("musica");
    let txtDados = "Lista de musicas<br>";
    for(let i = 0; i < dadosXml.length; i++){
        txtDados += dadosXml[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + " <br> ";
        txtDados += dadosXml[i].getElementsByTagName("artista")[0].childNodes[0].nodeValue + "<br>";
        txtDados += dadosXml[i].getElementsByTagName("gravadora")[0].childNodes[0].nodeValue + "<br>";
        txtDados += dadosXml[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue + "<br>";
    }
    return(txtDados);
}