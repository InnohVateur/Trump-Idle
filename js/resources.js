//Add 'amount' americans and update the page
function pwocweateAmewicans (amount) {
    setNumericValue("americans", getNumericValue("americans") + amount);
    updateLabel("americansCount", GameData["americans"]);
}

////Add 'amount' couples and update the page
function marryThoseFuckers (amount) {
    setNumericValue("couples", getNumericValue("couples") + amount);
    updateLabel("couplesCount", GameData["couples"])
}

//Add 'affect' to 'field'
function playewAction(field, affect) {
    setNumericValue(field, getNumericValue(field) + BigInt(affect));
}

//Display the couplesCount if greater than 0
function checkIfCouples() {
    if (getNumericValue("couples") > 0n) {
        document.getElementById("couplesCount").style.display = "block";
        updateLabel("couplesCount", "AND " + GameData["couples"] + " HAPPILY MARRIED PATRIOTS")
    }
    else {
        document.getElementById("couplesCount").style.display = "none";
    }
}