// utils/dataFetching.js
import axios from 'axios';
import { MAX_PAGES } from '../config/index.js';

export const fetchPaginatedData = async (url, pageSize = 1000) => {
	let allData = [];
	let currentPage = 1;
	let isPaginated = true;

	try {
		// First request
		const response = await axios.get(url, {
			params: { page: currentPage, limit: pageSize },
		});
		const initialData = Array.isArray(response.data) ? response.data : [];
		allData = allData.concat(initialData);

		// If we get more items than requested, assume non-paginated
		if (initialData.length > pageSize) {
			isPaginated = false;
			console.log(
				`Non-paginated endpoint detected. Received ${initialData.length} items (requested ${pageSize})`,
			);
		}

		// Handle paginated case
		if (isPaginated) {
			while (currentPage < MAX_PAGES) {
				console.log(`Fetching page ${currentPage} of ${MAX_PAGES}`);
				console.log(`Fetched ${initialData.length} items`);

				// If we got less than pageSize, we've reached the end
				if (initialData.length < pageSize) {
					console.log(`Reached end of data at ${url}`);
					break;
				}

				currentPage += 1;
				const nextResponse = await axios.get(url, {
					params: { page: currentPage, limit: pageSize },
				});
				const nextData = Array.isArray(nextResponse.data)
					? nextResponse.data
					: [];
				allData = allData.concat(nextData);

				if (nextData.length === 0) {
					console.log(`Reached end of data at ${url}`);
					break;
				}
			}
		} else {
			console.log(
				`Non-paginated endpoint processed. Total items: ${allData.length}`,
			);
		}

		return allData;
	} catch (error) {
		console.error(`Error fetching data from ${url}:`, error);
		throw error;
	}
};
