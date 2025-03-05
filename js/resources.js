function pwocweateAmewicans (amount) {
    console.log(amount);
    setNumericValue("americans", getNumericValue("americans") + amount);
    updateLabel("americansCount", GameData["americans"]);
}

function playewAction(field, affect) {
    setNumericValue(field, getNumericValue(field) + affect);
}