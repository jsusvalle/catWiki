import React, {useContext, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {useRouter} from 'next/router';
import {CatWikiContext} from '../../context/CatWikiContext';

import Layout from '../../components/layouts/Layout';
import LoadingPage from '../../components/LoadingPage';
import Error404 from '../../components/layouts/Error404';
import ScoreBreed from '../../components/ScoreBreed'; 

const breakpointsMediaQuerys = [481, 769, 1025, 1201]

const mq = breakpointsMediaQuerys.map(
    bp => `@media (min-width: ${bp}px)`
)

const ContainerInfoBreed = styled.div`
    ${[mq[1]]} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        justify-items: center;
    }
`;

const MainImage = styled.div`
    img {
        width: 400px;
        height: 400px;
        border-radius: 3rem;
        object-fit: cover;
    }
`;

const ContainerDescription = styled.div`
    h1 {
        margin: 0 0 3rem 0;
        font-weight: 600;
        font-size: 3.6rem;
        color: var(--brown-text)
    }

    p:first-of-type {
        color: var(--brown-text);
        font-weight: 500;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 2.5rem;
        span {
            font-weight: 500;
        }
    }
`;

const AttributesBreeds = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2.5rem;
`;

const SpanAttributes = styled.span`
    min-width: 180px;
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: .5rem;    
`;

const OtherPhotos = styled.h2`
    font-weight: 600;
    color: var(--brown-text);
    font-size: 3.6rem;
    margin: 3rem 0;
`;

const SectionImages = styled.section`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-bottom: 3rem;
    ${[mq[0]]} {
        row-gap: 3rem;
    }
    ${[mq[1]]} {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 3rem;
    }
    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 3rem;
    }
`;

const BreedInfo = () => {

    const router = useRouter();
    const { query: {name} } = router;

    const {getInfoBreed, getImagesBreed} = useContext(CatWikiContext);

    const [error, getError] = useState(false);
    const [databreed, saveDataBreed] = useState({});
    const [dataimagesbreed, saveDataImagesBreed] = useState([])

    useEffect (() => {
            if(name) {
                (async () => {
                    let infoBreed = await getInfoBreed(name);

                    if(infoBreed.length === 0) {
                        getError(true);
                        return;
                    } 

                    saveDataBreed(infoBreed[0]);
                    let saveBreedImages = await getImagesBreed(infoBreed[0].id);
                    saveDataImagesBreed(saveBreedImages);
                })();
            }
    }, [name]);

    if(Object.keys(databreed).length === 0 && !error) return <LoadingPage />;

    const {description, temperament, origin, life_span, adaptability, affection_level, child_friendly, grooming, intelligence, health_issues, social_needs, stranger_friendly} = databreed;

    return (  
        <Layout>
            {error ? <Error404 /> :
                                <>
                                    <ContainerInfoBreed>
                                        <MainImage>
                                            <img src={dataimagesbreed[0]} alt={name}/>
                                        </MainImage>

                                        <ContainerDescription>
                                            <h1>{name}</h1>

                                            <p>{description}</p>

                                            <p>Temperament: <span>{temperament}</span></p>
                                            <p>Origin: <span>{origin}</span></p>
                                            <p>Life Span: <span>{life_span} years</span></p>

                                            
                                            <AttributesBreeds>
                                                <SpanAttributes>Adaptability: </SpanAttributes> <ScoreBreed score={adaptability} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Affection level: </SpanAttributes> <ScoreBreed score={affection_level} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Child Friendly: </SpanAttributes> <ScoreBreed score={child_friendly} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Grooming: </SpanAttributes> <ScoreBreed score={grooming} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Intelligence: </SpanAttributes> <ScoreBreed score={intelligence} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Health issues: </SpanAttributes> <ScoreBreed score={health_issues} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Social needs: </SpanAttributes> <ScoreBreed score={social_needs} />
                                            </AttributesBreeds>
                                            <AttributesBreeds>
                                                <SpanAttributes>Stranger friendly: </SpanAttributes><ScoreBreed score={stranger_friendly} />
                                            </AttributesBreeds>
                                        </ContainerDescription>
                                    </ContainerInfoBreed>

                                    <OtherPhotos>Other photos</OtherPhotos>
                                    <SectionImages>
                                        {dataimagesbreed.map((imgbreed, index) => {
                                            if(index === 0) return;
                                            return <img src={imgbreed} alt={`photo of ${name}`} key={index} />
                                        })}
                                    </SectionImages>
                                </>
            }
        </Layout>
    );
}

export default BreedInfo;