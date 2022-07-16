
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
            console.log(serialNumber.replace(":",""));

        });
    } catch (error) {
        console.log("Argh! " + error);
    }
});
