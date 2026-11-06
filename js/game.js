var savegame = JSON.parse(localStorage.getItem("gameData"));
if (savegame != null) {
    GameData = savegame;
    updateLabels();
}
setInterval(save, 60000);

var pewSecondLoop = window.setInterval(function () {
    console.log(getNumericValue("couples"))
    pwocweateAmewicans(getNumericValue("couples"));
    checkIfCouples();
}, 1000);

//Detects when "FORCED MARRIAGE" is pressed.
document.getElementById("familyButton").addEventListener("click", () => {
    if (getNumericValue("americans") >= 2n) {
        playewAction("americans", -2n);
        updateLabel("americansCount",  GameData["americans"]);
        playewAction("couples", getNumericValue("couplesPerClick"));
        updateLabel("couplesCount", "AND " + GameData["couples"] + " HAPPILY MARRIED PATRIOTS")
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