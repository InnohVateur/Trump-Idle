function formatNumber(num) {
    const n = Number(num);
    if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
    if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
    if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(2) + 'K';
    return n.toString();
}

function getCost(item) {
    const owned = getNumericValue('items.' + item.id);
    return BigInt(Math.floor(Number(item.baseCost) * Math.pow(item.costMultiplier, Number(owned))));
}

function calculateAPS() {
    let totalAPS = 0n;
    shopItems.forEach(item => {
        totalAPS += getNumericValue('items.' + item.id) * item.production;
    });
    // Apply production multiplier
    const prodMult = getNumericValue('productionMultiplier');
    totalAPS = totalAPS * prodMult;
    setNumericValue('APS', totalAPS);
}

function calculateAPC() {
    const baseCPC = 1n;
    const clickMult = getNumericValue('clickMultiplier');
    setNumericValue('APC', baseCPC * clickMult);
}

function buyItem(item) {
    const cost = getCost(item);
    const americans = getNumericValue('americans');
    if (americans >= cost) {
        setNumericValue('americans', americans - cost);
        setNumericValue('items.' + item.id, getNumericValue('items.' + item.id) + 1n);
        calculateAPS();
        calculateAPC();
        updateUI();
        save();
    }
}

function buyUpgrade(upgrade) {
    const americans = getNumericValue('americans');
    if (americans >= upgrade.cost && !GameData.upgrades[upgrade.id]) {
        setNumericValue('americans', americans - upgrade.cost);
        GameData.upgrades[upgrade.id] = true;

        // Apply upgrade effect
        if (upgrade.type === 'click') {
            const currentMult = getNumericValue('clickMultiplier');
            setNumericValue('clickMultiplier', currentMult * upgrade.effect);
            calculateAPC();
        } else if (upgrade.type === 'production') {
            const currentMult = getNumericValue('productionMultiplier');
            setNumericValue('productionMultiplier', currentMult * upgrade.effect);
            calculateAPS();
        }

        updateUI();
        save();
    }
}

function playerAction(field, affect) {
    setNumericValue(field, getNumericValue(field) + affect);
}