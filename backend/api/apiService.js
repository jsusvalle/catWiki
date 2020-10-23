import apiService from './configApiService';

export const searchBreedByName = async (searchTerm) => {
    try {
        const res = await apiService.get(`/breeds/search?q=${searchTerm}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};