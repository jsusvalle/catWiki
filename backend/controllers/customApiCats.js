const Breeds = require('../model/breedsMostSearched');
const {searchBreedByName, searchImagesBreed} = require('../api/apiService');

exports.getMostSearchBreeds = async (req, res) => {

    let limitCats = req.query.limit || 10;
    limitCats = Number(limitCats);

    Breeds.find({}, (err, cats) => {
        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!Breeds) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Breeds not found'
                }
            });
        }

        res.status(200).json({
            ok: true,
            breeds: cats
        });
    }).limit(limitCats);
}

exports.getBreedsByName = async (req, res) => {

    const name = req.query.name;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({
            ok: false,
            error: {
                message: 'Bad Request'
            }
        });
    }

    try {
        const infoBreed = await searchBreedByName(name);
        res.status(200).json({
            ok: true,
            infoBreed
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            error: {
                message: 'Internal Server Error'
            },
        });
    }
}

exports.getImagesBreed = async (req, res) => {

    const idBreed = req.query.idBreed;
    let limit = req.query.limit || 9;
    limit = Number(limit);

    if(!idBreed || typeof idBreed !== 'string' || !limit) {
        return res.status(400).json({
            ok: false,
            error: {
                message: 'Bad Request'
            }
        });
    }

    try {
        const images = await searchImagesBreed(idBreed, limit);
        res.status(200).json({
            ok: true,
            images
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            error: {
                message: 'Internal Server Error'
            },
        });
    }
}

