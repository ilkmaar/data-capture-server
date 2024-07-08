// utils/dataFetching.js
import axios from 'axios';

export const fetchPaginatedData = async (url, pageSize = 1000) => {
    let allData = [];
    let currentPage = 1;
    const MAX_PAGES = 20;

    while (currentPage < MAX_PAGES) {
        const response = await axios.get(url, { params: { page: currentPage, limit: pageSize } });
        const data = response.data;

        allData = allData.concat(data);

        if (data.length < pageSize) {
          break;
        }

        currentPage += 1;
    }

    return allData;
};