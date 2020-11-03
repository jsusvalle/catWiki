import React, {useEffect, useState, useContext} from 'react'
import Link from 'next/link';
import { css } from '@emotion/core';
import axios from 'axios';

import Layout from '../components/layouts/Layout';
import {ImageBackground, Logo, TextSection, FormSearchBreed, ModalResultsSearch, ContainerSectionTitle, ContainerSectionButton, SectionMostSearched, TextMostSearched, SectionCatsDiscover, SectionArticle, ContainerImages, ContainerResultsSearch} from '../components/layouts/styles/index';
import LoadingSearch from '../components/LoadingSearch';
import ResultsSearch from '../components/ResultsSearch';
import BreedPopularIndex from '../components/BreedPopularIndex';

import {CatWikiContext} from '../context/CatWikiContext';

const Home = ({imagesPopularBreeds}) => {

  const [charging, getCharging] = useState(false);
  const [term, saveTerm] = useState('');
  const [breedsearched, getBreedSearched] = useState([]);

  const {getByNameOfBreed} = useContext(CatWikiContext);

  useEffect(() => {
    if(term.trim() === '') {
      getBreedSearched([]);
      return;
    } 

    getCharging(true);
    (async () => {
      let res = await getByNameOfBreed(term.trim());
      getBreedSearched(res);
      getCharging(false);
    })();
  }, [term]);

  return (
      <Layout>
        <ImageBackground>
          <Logo>
            <img src="/static/images/CatwikiLogo.svg" alt="Logo CatWiki"/>
          </Logo>
          <TextSection>
            <p>Get to know more about your cat breed</p>
          </TextSection>
          <FormSearchBreed>
            <input type="text" name="search" placeholder="Enter your breed" autoComplete="off" onChange={e => saveTerm(e.target.value)} />
            <button>{ charging 
              ? <LoadingSearch />
              : <i className="material-icons">search</i> }</button>
          </FormSearchBreed>
          {breedsearched.length !== 0 
            ? <ModalResultsSearch>
                <ContainerResultsSearch>
                  {breedsearched.map(termBreed => (
                    <ResultsSearch 
                      key={termBreed.id}
                      name={termBreed.name}
                    />
                  ))}
                </ContainerResultsSearch>
              </ModalResultsSearch>
            : null}
        </ImageBackground>

        <SectionMostSearched>
          <TextMostSearched>Most Searched Breeds</TextMostSearched>

          <div className="container-section">
            <ContainerSectionTitle>
              <h2>66+ Breeds For you to discover</h2>
            </ContainerSectionTitle>
            <div className="container-see-more">
              <Link href="/mostsearchedbreeds">
                <ContainerSectionButton>See more <i className="material-icons">arrow_right_alt</i></ContainerSectionButton>
              </Link> 
            </div>
          </div>

          <SectionCatsDiscover>
            {imagesPopularBreeds && imagesPopularBreeds.map(imagesCat => (
              <BreedPopularIndex
                key={imagesCat.breedId}
                imagesCat={imagesCat}
              />
            ))}
          </SectionCatsDiscover>
        </SectionMostSearched>

        <SectionArticle>
          <ContainerSectionTitle>
            <h2>Why should you have a cat?</h2>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <Link href="https://www.mentalfloss.com/article/635663/offbeat-november-holidays?utm_content=infinitescroll2">
              <ContainerSectionButton>Read more <i className="material-icons">arrow_right_alt</i></ContainerSectionButton>
            </Link> 
          </ContainerSectionTitle>
          <ContainerImages>
            <img src="/static/images/image2.png" alt="Image Cat" css={css`
              grid-column: span 3/span 3;
            `} />
            <img src="/static/images/image3.png" alt="Image Cat" css={css`
              grid-row: span 2/span 2;
              grid-column: span 2/span 2;
            `} />
            <img src="/static/images/image1.png" alt="Image Cat" css={css`
              grid-column: span 2/span 2;
              grid-row: span 2/span 2;
              grid-column-start: 2;
            `} />
          </ContainerImages>
        </SectionArticle>
      </Layout>
  )
}

export async function getStaticProps() {
  let result = await axios.get(`https://cat-wiki-api.herokuapp.com/api/breeds/mostsearched?limit=4`);
  return {
    props: {imagesPopularBreeds: result.data.breeds}
  }
}


export default Home;
