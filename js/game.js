var savegame = JSON.parse(localStorage.getItem("gameData"));
if (savegame != null) {
    GameData = savegame;
    updateLabels();
}
setInterval(save, 60000);

var pewSecondLoop = window.setInterval(function () {
    pwocweateAmewicans(getNumericValue("couples"));
}, 1000);

//Detects when "FORCED MARRIAGE" is pressed.
document.getElementById("familyButton").addEventListener("click", () => {
    if (getNumericValue("americans") >= 2) {
        playewAction("americans", -2);
        playewAction("couples", getNumericValue("couplesPerClick"));
        updateLabel("couplesCount", GameData["couples"])
    }
});

//Detects when "MAKE BABY AMERICAN" is pressed.
document.getElementById("americanButton").addEventListener("click", () => {
    playewAction("americans", getNumericValue("APC"));
    updateLabel("americansCount", GameData["americans"])
});

//Detects when "Clear Save" is pressed.
document.getElementById("clearSaveButton").addEventListener("click", () => {
    wipe();
});

//Detects when "Save Progression" is pressed.
document.getElementById("saveButton").addEventListener("click", () => {
    save();
});