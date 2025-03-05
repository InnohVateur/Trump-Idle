var savegame = JSON.parse(localStorage.getItem("gameData"));
if (savegame != null) {
    GameData = savegame;
    updateLabels();
}
setInterval(save, 60000);

var pewSecondLoop = window.setInterval(function() {
    pwocweateAmewicans(getNumericValue("APS"));
}, 1000);

document.getElementById("americanButton").addEventListener("click", (e) => {
    playewAction("americans", getNumericValue("APC"));
    updateLabel("americansCount", GameData["americans"])
});

document.getElementById("clearSaveButton").addEventListener("click", (e) => {
    localStorage.clear();
    location.reload();
});