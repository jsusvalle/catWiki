const apiService = require('./configApiService');

exports.searchBreeds = async (text) => {
    try {
        const res = await apiService.get(`/breeds/search?q=${text}`);
        
        const breed = res.data.map((item) => {
            return {
                id: item.id,
                name: item.name
            }
        });

        return breed;
    } catch (error) {
        
    }
}

exports.searchBreedByName = async (searchTerm) => {
    try {
        const res = await apiService.get(`/breeds/search?q=${searchTerm}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

exports.searchImagesBreed = async (idBreed, limit) => {
    try {
        const res = await apiService.get(`/images/search?breed_id=${idBreed}&limit=${limit}`);
        
        const images = res.data.map((item) => item.url);

        return images;
    } catch (err) {
        throw err
    }
}