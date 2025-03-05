var GameData = {
    americans: 0n.toString(),
    APS : 0n.toString(),
    APC : 1n.toString()
};

function save() {
    localStorage.setItem("")
}

function wipe() {
    localStorage.clear();
}

function getNumericValue(field) {
    return BigInt(GameData[field]);
}

function setNumericValue(field, val) {
    GameData[field] = val.toString();
}