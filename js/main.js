// Load saved game
load();
calculateAPC();
calculateAPS();
updateUI();

// Auto-save every minute
setInterval(save, 60000);

// Production loop - runs every second
var perSecondLoop = window.setInterval(function() {
    const aps = getNumericValue('APS');
    const americans = getNumericValue('americans');
    setNumericValue('americans', americans + aps);
    
    // Wokisme increases
    const wokeIncrease = 0.5 + (Number(getNumericValue('items.country')) * 0.1);
    GameData.wokisme += wokeIncrease;

    // Check game over
    if (GameData.wokisme >= 100) {
        document.getElementById('gameOver').style.display = 'flex';
        return;
    }

    updateUI();
}, 1000);

// Click to make Americans
document.getElementById("americanButton").addEventListener("click", (e) => {
    const americans = getNumericValue('americans');
    const apc = getNumericValue('APC');
    setNumericValue('americans', americans + apc);
    updateLabel("americansCount", getNumericValue("americans"));
});

// Suppress wokisme
document.getElementById("suppressButton").addEventListener("click", (e) => {
    GameData.wokisme = Math.max(0, GameData.wokisme - 15);
    updateUI();
});

// Clear save button
document.getElementById("clearSaveButton").addEventListener("click", (e) => {
    wipe();
});

// Restart game after game over
document.getElementById("restartButton").addEventListener("click", (e) => {
    GameData = {
        americans: "0",
        APS: "0",
        APC: "1",
        wokisme: 0,
        clickMultiplier: "1",
        productionMultiplier: "1",
        items: {
            family: "0",
            state: "0",
            country: "0"
        },
        upgrades: {},
        unlocked: {
            producers: {},
            upgrades: {}
        }
    };
    document.getElementById('gameOver').style.display = 'none';
    calculateAPC();
    calculateAPS();
    save();
    updateUI();
});
