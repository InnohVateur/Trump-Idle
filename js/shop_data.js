const shopItems = [
    {
        id: 'family',
        name: 'American Family',
        description: 'A traditional family making baby \'Mericans',
        baseCost: 15n,
        production: 1n,
        costMultiplier: 1.15,
        emoji: '👨‍👩‍👧‍👦',
        type: 'producer'
    },
    {
        id: 'state',
        name: 'US State',
        description: 'An entire state producing patriots!',
        baseCost: 100n,
        production: 8n,
        costMultiplier: 1.2,
        emoji: '🏛️',
        unlock: 50n,
        type: 'producer'
    },
    {
        id: 'country',
        name: 'Colonized Country',
        description: 'MAKE THE WORLD GREAT AGAIN!',
        baseCost: 1000n,
        production: 50n,
        costMultiplier: 1.25,
        emoji: '🌍',
        unlock: 500n,
        type: 'producer'
    }
];

const upgradeItems = [
    {
        id: 'elector1',
        name: 'Grand Elector',
        description: 'Double your click power!',
        cost: 50n,
        effect: 2n,
        emoji: '🗳️',
        type: 'click',
        level: 1
    },
    {
        id: 'elector2',
        name: 'Electoral College',
        description: 'x5 click power!',
        cost: 500n,
        effect: 5n,
        emoji: '🏛️',
        type: 'click',
        unlock: 200n,
        level: 2,
        requires: 'elector1'
    },
    {
        id: 'elector3',
        name: 'Supreme Elector',
        description: 'x10 click power!',
        cost: 5000n,
        effect: 10n,
        emoji: '👑',
        type: 'click',
        unlock: 2000n,
        level: 3,
        requires: 'elector2'
    },
    {
        id: 'embargo1',
        name: 'Trade Embargo',
        description: 'x2 production speed!',
        cost: 100n,
        effect: 2n,
        emoji: '🚫',
        type: 'production',
        level: 1
    },
    {
        id: 'embargo2',
        name: 'Economic Sanctions',
        description: 'x5 production speed!',
        cost: 1000n,
        effect: 5n,
        emoji: '💰',
        type: 'production',
        unlock: 500n,
        level: 2,
        requires: 'embargo1'
    },
    {
        id: 'embargo3',
        name: 'Total Blockade',
        description: 'x10 production speed!',
        cost: 10000n,
        effect: 10n,
        emoji: '⛔',
        type: 'production',
        unlock: 5000n,
        level: 3,
        requires: 'embargo2'
    }
];