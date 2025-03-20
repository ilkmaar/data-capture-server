export const lookupIsResource = (itemTypeId) => {
	return itemTypeId < 16 ? 1 : 0;
};

export const lookupActivityType = (activityTypeId) => {
	switch (activityTypeId) {
		case 0:
			return 'NONE';
		case 1:
			return 'TEND';
		case 2:
			return 'ACTIVITY';
		case 3:
			return 'HANGOUT';
		case 4:
			return 'REST';
	}
};

export const lookupInventoryActionType = (typeId) => {
	switch (typeId) {
		case 0:
			return 'IN';
		case 1:
			return 'OUT';
	}
};

export const lookupDataActionType = (typeId) => {
	switch (typeId) {
		case 0:
			return 'Open';
		case 1:
			return 'Save';
		case 2:
			return 'Share';
		case 3:
			return 'VisualizeAsTable';
		case 4:
			return 'VisualizeAsGraph';
		case 5:
			return 'Rename';
		case 6:
			return 'Merge';
		case 7:
			return 'SelectAxis';
		case 8:
			return 'Close';
	}
};

export const lookupSunType = (sunTypeId) => {
	switch (sunTypeId) {
		case 1:
			return 'SUNNY';
		case 2:
			return 'CLOUDY';
	}
};

export const lookupRainType = (rainTypeId) => {
	switch (rainTypeId) {
		case 1:
			return 'DRY';
		case 2:
			return 'RAINY';
	}
};

export const lookupDataSource = (sourceId) => {
	switch (sourceId) {
		case 0:
			return 'World';
		case 1:
			return 'Inventory';
		case 2:
			return 'Board';
		case 3:
			return 'Creature';
		case null:
			return null;
	}
};

export const lookupItemVarietyId = (itemVarietyName) => {
	const ITEM_VARIETY_ID_BY_NAME = {
		//
		// FOOD
		//
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

		//
		// POTIONS
		//

		// TEAS
		'Wheatberry Green Tea': 5,
		'Stonefruit Oolong Tea': 5,
		'Cocoa Mint Tea': 5,
		'Sporefruit Healing Tea': 5,

		// TONICS
		'Wheatberry Guard Tonic': 6,
		'Stonefruit Shield Tonic': 6,
		'Cocoa Barrier Tonic': 6,
		'Sporefruit Defense Tonic': 6,

		// BREWS
		'Wheatberry Glow Elixir': 7,
		'Stonefruit Crystal Elixir': 7,
		'Cocoberry Bliss Elixir': 7,
		'Sporefruit Sparkle Elixir': 7,
		'Sporefruit Enigma Brew': 7,
		'Wheatberry Luminescent Brew': 7,
		'Stonefruit Illusion Brew': 7,
		'Cocoa Mystic Brew': 7,
		'Sporefruit Sparkle Brew': 7,

		// BOBAS
		'Wheatberry Glow Boba': 8,
		'Stonefruit Crystal Boba': 8,
		'Cocoberry Bliss Boba': 8,
		'Sporefruit Sparkle Boba': 8,

		// VITALWOOD
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

	const result = ITEM_VARIETY_ID_BY_NAME[itemVarietyName];
	if (result === undefined && itemVarietyName) {
		console.warn(
			`Could not find variety ID for item name: "${itemVarietyName}"`,
		);
	}
	return result;
};

export const lookupSicknessCategory = (sicknessCategoryId) => {
	switch (sicknessCategoryId) {
		case 1:
			return 'Physical';
		case 2:
			return 'Mental';
		case 3:
			return 'Social';
		case 4:
			return 'Emotional';
	}
};

export const lookupSicknessName = (sicknessName) => {
	switch (sicknessName) {
		case 1:
			return 'Cold';
		case 2:
			return 'Flu';
		case 3:
			return 'Allergies';
		case 4:
			return 'Infection';
		case 5:
			return 'Poison';
		case 6:
			return 'Fatigue';
		case 7:
			return 'Depression';
		case 8:
			return 'Anxiety';
	}
};
