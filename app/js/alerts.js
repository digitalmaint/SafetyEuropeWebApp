function alert(type,message){
    window.scrollTo(0, 0);
    if(type==="error"){
        $("#alert").html("<div class=\"alert alert-"+type+"\" >\n" +
            "                    <h4 class=\"alert-heading\">Errore inaspettato</h4>\n" +
            "                    <p>Si è verificato un errore durante la chiamata per ottenere le informazioni di base sull'ambienete OpenMaint</p>\n" +
            "                    <p id=\"error\"> Errore: " +
            error.response.data.messages[0].message+
            "                    </p>\n" +
            error.response.request.responseURL+
            "                </div>")
    }
    else{
        $("#alert").html("<div class=\"alert alert-"+type+"\" >\n" +
            "                    <h4 class=\"alert-heading\">Informazioni</h4>\n" +
            "                    <p>"+message+"</p>\n" +
            "                </div>")
    }

}
