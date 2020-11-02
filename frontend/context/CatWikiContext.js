import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CatWikiContext = createContext();

const CatWikiProvider = props => {

    //* Most searched: /api/breeds/mostsearched?limit=4
    //* get Info Breed: /api/breeds/search?name=Bengal
    //* get images Breed: /api/breeds/searchimage?idBreed=beng?limit=2
    //* get search name of breeds: /api/breeds/searchbyname?term=burmese

    const urlApi = 'https://cat-wiki-api.herokuapp.com';

    const getByNameOfBreed = async (name) => {
        try {
            let res = await axios.get(`${urlApi}/api/breeds/searchbyname?term=${name}`);
            return res.data.breeds;
        } catch (error) {
            console.log(error);
        }
    } 

    const getMostSearched = async (limit) => {
        try {
            let res = await axios.get(`${urlApi}/api/breeds/mostsearched?limit=${limit}`);
            return res.data.breeds;
        } catch (error) {
            console.log(error);
        }
    }

    const getInfoBreed = async (name) => {
        try {
            let resInfo = await axios.get(`${urlApi}/api/breeds/search?name=${name}`);
            return resInfo.data.infoBreed;
        } catch (error) {
            console.log(error);
        }
        
    }

    const getImagesBreed = async (idBreed) => {
        try {
            let res = await axios.get(`${urlApi}/api/breeds/searchimage?idBreed=${idBreed}`);
            return res.data.images;
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <CatWikiContext.Provider
            value={{
                getByNameOfBreed,
                getMostSearched,
                getInfoBreed,
                getImagesBreed
            }}
        >
            {props.children}
        </CatWikiContext.Provider>
    );
}

export default CatWikiProvider;