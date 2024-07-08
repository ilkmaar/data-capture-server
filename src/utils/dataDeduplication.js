// utils/dataDeduplication.js
export const deduplicateData = (data, uniqueKey) => {
    const uniqueDataMap = new Map();
    data.forEach(item => {
        uniqueDataMap.set(item[uniqueKey], item);
    });
    
    return Array.from(uniqueDataMap.values());
};