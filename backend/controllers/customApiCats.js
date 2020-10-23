const Breeds = require('../model/breedsMostSearched');

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
                err: {
                    message: 'Breeds not found'
                }
            });
        }

        res.json({
            ok: true,
            breeds: cats
        });
    }).limit(limitCats);
}

