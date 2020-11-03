import React, {useEffect, useState, useContext} from 'react';
import {css} from '@emotion/core';

import Layout from '../components/layouts/Layout';
import LoadingPage from '../components/LoadingPage';
import TopMostSearched from '../components/TopMostSearched';
import {CatWikiContext} from '../context/CatWikiContext';

const MostSearchedBreeds = () => {

    const [error, getError] = useState(false);
    const [popularbreeds, savePopularBreeds] = useState([]);

    const {getMostSearched} = useContext(CatWikiContext);

    useEffect(() => {
        (async () => {
            let result = await getMostSearched(10);

            if(result.length === 0) return;

            getError(true);
            savePopularBreeds(result);
        })();
    }, []);

    if(popularbreeds.length === 0 && !error) return <LoadingPage />;

    return (  
        <Layout>
            <h1 css={css`margin-bottom: 5rem;`}
            >Top 10 most searched breeds</h1>

            {popularbreeds.map((breed, index) => (
                <TopMostSearched 
                    key={breed.breedId}
                    breed={breed}
                    index={index+1}
                />
            ))}
        </Layout>
    );
}

export default MostSearchedBreeds;