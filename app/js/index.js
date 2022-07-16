$( document ).ready(function() {
let scanButton=document.getElementById("scanButton");
scanButton.addEventListener("click", async () => {
    console.log("User clicked scan button");
    try {
        const ndef = new NDEFReader();
        await ndef.scan();
        console.log("> Scan started");

        ndef.addEventListener("readingerror", () => {
            console.log("Argh! Cannot read data from the NFC tag. Try another one?");
        });

        ndef.addEventListener("reading", ({ message, serialNumber }) => {

            console.log(`> Serial Number: ${serialNumber}`);
            console.log(serialNumber.replaceAll(":",""));
            localStorage.setItem("user_skill_card_serial",serialNumber.replaceAll(":",""));
            if(localStorage.getItem("user_skill_card_serial")){
                $("#alert").innerHTML("<div class=\"alert alert-info\">" +
                    "                    <h4 class=\"alert-heading\">Lettura NFC Effettuata Correttamente ... attendere</h4>" +
                    "                    <p>La lettura del della Skill Card è stata eseguita con successo, attendere fino al completamento della procedura di autenticazione</p>" +
                    "                </div>")
            }
            else{
                $("#alert").innerHTML("<div class=\"alert alert-primary\" style=\"visibility: hidden\">\n" +
                    "                    <h4 class=\"alert-heading\">Errore nella Lettura NFC</h4>\n" +
                    "                    <p>Si è verificato un errore nella lettura della Skill Card</p>\n" +
                    "                    <p id=\"error\"></p>\n" +
                    "                </div>")
            }


        });
    } catch (error) {
        console.log("Argh! " + error);
    }

});
});
