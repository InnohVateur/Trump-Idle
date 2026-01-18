var GameData = {
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

function save() {
    try {
        localStorage.setItem('trumpIdleGameData', JSON.stringify(GameData));
        console.log('Game saved!');
    } catch (e) {
        console.error('Failed to save:', e);
    }
}

function load() {
    try {
        const savedData = localStorage.getItem('trumpIdleGameData');
        if (savedData) {
            const loaded = JSON.parse(savedData);
            // Merge with defaults to ensure all fields exist
            GameData = {
                americans: loaded.americans || "0",
                APS: loaded.APS || "0",
                APC: loaded.APC || "1",
                wokisme: loaded.wokisme || 0,
                clickMultiplier: loaded.clickMultiplier || "1",
                productionMultiplier: loaded.productionMultiplier || "1",
                items: {
                    family: (loaded.items && loaded.items.family) || "0",
                    state: (loaded.items && loaded.items.state) || "0",
                    country: (loaded.items && loaded.items.country) || "0"
                },
                upgrades: loaded.upgrades || {},
                unlocked: {
                    producers: (loaded.unlocked && loaded.unlocked.producers) || {},
                    upgrades: (loaded.unlocked && loaded.unlocked.upgrades) || {}
                }
            };
            console.log('Game loaded!');
            return true;
        }
    } catch (e) {
        console.error('Failed to load:', e);
    }
    return false;
}

function wipe() {
    if (confirm('Are you sure you want to clear your save?')) {
        localStorage.removeItem('trumpIdleGameData');
        location.reload();
    }
}

function getNumericValue(field) {
    try {
        if (field.includes('.')) {
            const parts = field.split('.');
            const value = GameData[parts[0]][parts[1]];
            return value ? BigInt(value) : 0n;
        }
        const value = GameData[field];
        return value ? BigInt(value) : 0n;
    } catch (e) {
        console.error('Error getting numeric value for', field, e);
        return 0n;
    }
}

function setNumericValue(field, val) {
    try {
        if (field.includes('.')) {
            const parts = field.split('.');
            GameData[parts[0]][parts[1]] = val.toString();
        } else {
            GameData[field] = val.toString();
        }
    } catch (e) {
        console.error('Error setting numeric value for', field, e);
    }
}