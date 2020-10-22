import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CatWikiContext = createContext();

const CatWikiProvider = props => {

    const api_key = '70f5a5a7-893d-4c53-afd3-df9743015902';
    axios.defaults.headers.common['x-api-key'] = api_key;


    const callApiCat = async () => {
        try {
            let data = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=4`);
            console.log(data);
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