export const lookupIsResource = (itemTypeId) => {
    return itemTypeId < 16 ? 1 : 0;
}

export const lookupActivityType = (activityTypeId) => {
    switch (activityTypeId) {
        case 0:
            return "NONE";
        case 1:
            return "TEND";
        case 2:
            return "ACTIVITY";
        case 3:
            return "HANGOUT";
        case 4:
            return "REST";
    }
}

export const lookupInventoryActionType = (typeId) => {
    switch (typeId) {
        case 0:
            return "IN";
        case 1:
            return "OUT";
    }
}

export const lookupDataActionType = (typeId) => {
    switch (typeId) {
        case 0:
            return "Open";
        case 1:
            return "Save";
        case 2:
            return "Share";
        case 3:
            return "VisualizeAsTable";
        case 4:
            return "VisualizeAsGraph";
        case 5:
            return "Rename";
        case 6:
            return "Merge";
        case 7:
            return "SelectAxis";
        case 8:
            return "Close";            
    }
}

export const lookupSunType = (sunTypeId) => {
    switch (sunTypeId) {
        case 1:
            return "SUNNY";
        case 2:
            return "CLOUDY";
    }
}

export const lookupRainType = (rainTypeId) => {
    switch (rainTypeId) {
        case 1:
            return "DRY";
        case 2:
            return "RAINY";
    }
}

export const lookupDataSource = (sourceId) => {
    switch (sourceId) {
        case 0:
            return "World";
        case 1:
            return "Inventory";
        case 2:
            return "Board";
        case 3:
            return "Creature";
        case null:
            return null
    }
}

export const lookupItemVarietyId = (itemVarietyName) => {
    const ITEM_VARIETY_ID_BY_NAME = {
        'Berry Burst Smoothie': 1,
        'Stonefruit Spritzer': 1,
        'Chocolate Delight': 1,
        'Tropical Punch': 1,
        'Berry Burst Jelly': 2,
        'Apricot Jelly': 2,
        'Chocolate Jelly': 2,
        'Tropical Fruit Gel': 2,
        'Wheatberry Pastry': 3,
        'Peach Pie': 3,
        'Chocolate Tart': 3,
        'Tropical Fruit Puff': 3,
        'Vanilla Cupcake': 4,
        'Peach Cupcake': 4,
        'Chocolate Cupcake': 4,
        'Funfetti Cupcake': 4,
        'Wheatberry Green Tea': 5,
        'Stonefruit Oolong Tea': 5,
        'Cocoa Mint Tea': 5,
        'Sporefruit Herbal Tea': 5,
        'Wheatberry Guard Tonic': 6,
        'Stonefruit Shield Syrup': 6,
        'Cocoa Barrier Blend': 6,
        'Sporefruit Defense Tonic': 6,
        'Wheatberry Luminescent Brew': 7,
        'Stonefruit Illusion Brew': 7,
        'Cocoa Mystic Brew': 7,
        'Sporefruit Enigma Brew': 7,
        'Wheatberry Glow Boba': 8,
        'Stonefruit Crystal Boba': 8,
        'Cocoberry Bliss Boba': 8,
        'Sporefruit Sparkle Boba': 8,
        'Vitalwood Violin': 9,
        'Harmoni-crystal': 9,
        'Chitin Chime': 9,
        'Mycolumin Lyre': 9,
        'Stonelace Ivy': 10,
        'Seismi-crystal': 10,
        'Keystone Relic': 10,
        'Glowgrain Marble': 10,
        'Vitalink Codex': 11,
        'Mysti-crystal': 11,
        'Shadowscript Scroll': 11,
        'Mycolumin Manuscript': 11,
        'Lifeweave Vest': 12,
        'Prisma-crystal': 12,
        'Enchanted Shadowcloak': 12,
        'Glowthread Garment': 12,
        'Sap Bloom Crystal': 13,
        'Sweet Blossom Crystal': 13,
        'Honey Sprout Crystal': 13,
        'Candy Vine Crystal': 13,
        'Luminaector Stone': 14,
        'Silver Glaze Stone': 14,
        'Celestial Honey Stone': 14,
        'Stardust Stone': 14,
        'Midnight Shard': 15,
        'Nocturnal Sucrose Shard': 15,
        'Honeyweb Shard': 15,
        'Shadowdust Shard': 15,
        'Mushloom Gem': 16,
        'Sporeweb Gem': 16,
        'Honeyfung Gem': 16,
        'Fungal Fluff Gem': 16,
    };

    return ITEM_VARIETY_ID_BY_NAME[itemVarietyName];
};