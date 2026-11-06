//Add 'amount' americans and update the page
function pwocweateAmewicans (amount) {
    console.log(amount);
    setNumericValue("americans", getNumericValue("americans") + amount);
    updateLabel("americansCount", GameData["americans"]);
}

////Add 'amount' couples and update the page
function marryThoseFuckers (amount) {
    console.log(amount);
    setNumericValue("couples", getNumericValue("couples") + amount);
    updateLabel("couplesCount", GameData["couples"])
}

//Add 'affect' to 'field'
function playewAction(field, affect) {
    setNumericValue(field, getNumericValue(field) + BigInt(affect));
}