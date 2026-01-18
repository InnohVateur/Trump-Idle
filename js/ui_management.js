const Labels = [
    ["americansCount", "americans"],
    ["apsDisplay", "APS"],
    ["apcDisplay", "APC"],
    ["familiesOwned", "items.family"],
    ["statesOwned", "items.state"],
    ["countriesOwned", "items.country"]
];

function updateLabel(labelID, value) {
    const element = document.getElementById(labelID);
    if (element) {
        element.innerHTML = formatNumber(value);
    }
}

function updateLabels() {
    Labels.forEach((el) => {
        const value = getNumericValue(el[1]);
        updateLabel(el[0], value);
    });
    
    // Update woke bar
    const wokePercent = Math.min(100, GameData.wokisme);
    document.getElementById('wokeBar').style.width = wokePercent + '%';
    document.getElementById('wokePercent').textContent = wokePercent.toFixed(0) + '%';
}

function updateUI() {
    updateLabels();
    renderShop();
}

function renderShop() {
    const container = document.getElementById('shopItems');
    if (!container) return;
    
    container.innerHTML = '';

    // Producers section
    const producersTitle = document.createElement('div');
    producersTitle.className = 'shop-section-title producers';
    producersTitle.textContent = '🏭 PRODUCERS';
    container.appendChild(producersTitle);

    shopItems.forEach(item => {
        const americans = getNumericValue('americans');
        
        // Check if unlocked
        const meetsRequirement = !item.unlock || americans >= item.unlock;
        const wasUnlocked = GameData.unlocked.producers[item.id];
        const isUnlocked = meetsRequirement || wasUnlocked;
        
        // Mark as unlocked if requirement is met
        if (meetsRequirement && !wasUnlocked) {
            GameData.unlocked.producers[item.id] = true;
        }
        
        const cost = getCost(item);
        const canAfford = americans >= cost;

        const div = document.createElement('div');
        div.className = 'shop-item' + (!canAfford || !isUnlocked ? ' locked' : '');
        
        if (isUnlocked) {
            const prodMult = getNumericValue('productionMultiplier');
            const actualProduction = item.production * prodMult;
            div.innerHTML = `
                <div class="shop-item-name">${item.emoji} ${item.name}</div>
                <div class="shop-item-description">${item.description}</div>
                <div class="shop-item-cost">Cost: ${formatNumber(cost)} 'Mericans</div>
                <div class="shop-item-owned">Owned: ${formatNumber(getNumericValue('items.' + item.id))} | +${formatNumber(actualProduction)}/s each</div>
            `;

            if (canAfford) {
                div.addEventListener('click', () => buyItem(item));
            }
        } else {
            div.innerHTML = `
                <div class="shop-item-name">🔒 ???</div>
                <div class="shop-item-description">Unlock at ${formatNumber(item.unlock)} 'Mericans</div>
            `;
        }

        container.appendChild(div);
    });

    // Upgrades section
    const upgradesTitle = document.createElement('div');
    upgradesTitle.className = 'shop-section-title upgrades';
    upgradesTitle.textContent = '⬆️ UPGRADES';
    container.appendChild(upgradesTitle);

    upgradeItems.forEach(upgrade => {
        const americans = getNumericValue('americans');
        
        // Check if unlocked
        const meetsRequirement = !upgrade.unlock || americans >= upgrade.unlock;
        const wasUnlocked = GameData.unlocked.upgrades[upgrade.id];
        const isUnlocked = meetsRequirement || wasUnlocked;
        
        // Mark as unlocked if requirement is met
        if (meetsRequirement && !wasUnlocked) {
            GameData.unlocked.upgrades[upgrade.id] = true;
        }
        
        const isPurchased = GameData.upgrades[upgrade.id];
        const requirementMet = !upgrade.requires || GameData.upgrades[upgrade.requires];
        const canAfford = americans >= upgrade.cost && !isPurchased && requirementMet;

        const div = document.createElement('div');
        div.className = 'shop-item' + (!canAfford || !isUnlocked ? ' locked' : '');
        
        if (isPurchased) {
            div.className += ' purchased';
        }

        if (isUnlocked && requirementMet) {
            div.innerHTML = `
                <div class="shop-item-name">${upgrade.emoji} ${upgrade.name} ${isPurchased ? '✓' : ''}</div>
                <div class="shop-item-description">${upgrade.description}</div>
                <div class="shop-item-cost">${isPurchased ? 'PURCHASED' : 'Cost: ' + formatNumber(upgrade.cost) + ' \'Mericans'}</div>
            `;

            if (canAfford && !isPurchased) {
                div.addEventListener('click', () => buyUpgrade(upgrade));
            }
        } else if (!requirementMet) {
            div.innerHTML = `
                <div class="shop-item-name">🔒 ${upgrade.name}</div>
                <div class="shop-item-description">Requires previous upgrade</div>
            `;
        } else {
            div.innerHTML = `
                <div class="shop-item-name">🔒 ???</div>
                <div class="shop-item-description">Unlock at ${formatNumber(upgrade.unlock)} 'Mericans</div>
            `;
        }

        container.appendChild(div);
    });
}