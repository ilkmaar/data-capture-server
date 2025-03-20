// utils/dataDeduplication.js
export const deduplicateData = (data, uniqueKey) => {
	const uniqueDataMap = new Map();
	data.forEach((item) => {
		// check if exists already and log if duplicate
		if (uniqueDataMap.has(item[uniqueKey])) {
			// console.log('uniqueKey: ', uniqueKey);
			// console.log('duplicate item: ', item);
		}
		uniqueDataMap.set(item[uniqueKey], item);
	});

	return Array.from(uniqueDataMap.values());
};
