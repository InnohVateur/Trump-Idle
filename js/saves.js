var GameData = {
    americans: 0n.toString(),
    APS : 0n.toString(),
    APC : 1n.toString()
};

function save() {
    localStorage.setItem("gameData", JSON.stringify(GameData))
}

function wipe() {
    localStorage.removeItem("gameData");
    location.reload();
}

function getNumericValue(field) {
    return BigInt(GameData[field]);
}

function setNumericValue(field, val) {
    GameData[field] = val.toString();
}