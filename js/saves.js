var GameData = {
    americans: 0n.toString(),
    couples: 0n.toString(),
    APS : 0n.toString(),
    APC : 1n.toString(),
    couplesPerClick : 1n.toString()
};

function save() {
    localStorage.setItem("gameData", JSON.stringify(GameData))
}

function wipe() {
    localStorage.removeItem("gameData");
    location.reload();
}

//Return the value of 'field' as a BigInt
function getNumericValue(field) {
    return BigInt(GameData[field]);
}

//Set 'field' to 'val' doing the BigInt conversion
function setNumericValue(field, val) {
    GameData[field] = BigInt(val).toString();
}