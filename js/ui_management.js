const Labels = [ ["americansCount", "americans"] ];

function updateLabel (labelID, value) {
    document.getElementById(labelID).innerHTML = value;
}

function updateLabels() {
    Labels.forEach((el) => updateLabel(el[0], GameData[el[1]]));
}