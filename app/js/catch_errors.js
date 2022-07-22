function catch_errors(error){
    window.scrollTo(0, 0);
    $("#alert").html("<div class=\"alert alert-danger\" >\n" +
        "                    <h4 class=\"alert-heading\">Errore inaspettato</h4>\n" +
        "                    <p>Si è verificato un errore durante la chiamata per ottenere le informazioni di base sull'ambienete OpenMaint</p>\n" +
        "                    <p id=\"error\"> Errore: " +
        error.response.data.messages[0].message+
        "                    </p>\n" +
        error.response.request.responseURL+
        "                </div>")
    if(error.response.status===401){
        localStorage.removeItem('auth_token');
        location.reload();
    }
}
