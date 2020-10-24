import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CatWikiContext = createContext();

const CatWikiProvider = props => {

    //* Most searched: /api/breeds/mostsearched?limit=4
    //* get Info Breed: /api/breeds/search?name=Bengal
    //* get images Breed: /api/breeds/searchimage?idBreed=beng?limit=2
    //* get search name of breeds: /api/breeds/searchbyname?term=burmese

    const urlApi = 'https://cat-wiki-api.herokuapp.com';

    const callApiCat = async () => {
        try {
            let res = await axios.get(`${urlApi}/api/breeds/mostsearched?limit=4`);
            return res.data.breeds;
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <CatWikiContext.Provider
            value={{
                callApiCat
            }}
        >
            {props.children}
        </CatWikiContext.Provider>
    );
}

export default CatWikiProvider;