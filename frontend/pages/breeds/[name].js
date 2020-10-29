import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {CatWikiContext} from '../../context/CatWikiContext';

import Layout from '../../components/layouts/Layout';
import Loading from '../../components/Loading';
import Error404 from '../../components/layouts/Error404';

const BreedInfo = () => {

    const router = useRouter();
    const { query: {name} } = router;

    const {getInfoBreed, getImagesBreed} = useContext(CatWikiContext);

    const [loading, setLoading] = useState(true);
    const [databreed, saveDataBreed] = useState({});

    useEffect (() => {
        const consultApiInfo = async () => {
            let infoBreed = await getInfoBreed(name);
            saveDataBreed(infoBreed);
            setLoading(false);
        }
        // consultApiInfo();
    }, []);

    // if(loading) return <Loading />;

    // if(Object.keys(databreed).length === 0) return 'Charging...';

    return (  
        <Layout>
            {loading && <Loading />}
        </Layout>
    );
}

export default BreedInfo;