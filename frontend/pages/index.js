import React, {useEffect, useState, useContext} from 'react'
import Link from 'next/link';
import { css } from '@emotion/core';
import axios from 'axios';

import Layout from '../components/layouts/Layout';
import {ImageBackground, Logo, TextSection, FormSearchBreed, ContainerSectionTitle, ContainerSectionButton, SectionMostSearched, TextMostSearched, SectionCatsDiscover, SectionArticle, ContainerImages} from '../components/layouts/styles/index';
import BreedPopularIndex from '../components/BreedPopularIndex';

import {CatWikiContext} from '../context/CatWikiContext';

const Home = ({imagesPopularBreeds}) => {

  // const [popularbreeds, savePopularBreeds] = useState([]);

  // const {getMostSearched} = useContext(CatWikiContext);

  return (
      <Layout>
        <ImageBackground>
          <Logo>
            <img src="/static/images/CatwikiLogo.svg" alt="Logo CatWiki" />
          </Logo>
          <TextSection>
            <p>Get to know more about your cat breed</p>
          </TextSection>
          <FormSearchBreed>
            <input type="search" name="search" placeholder="Enter your breed" />
            <button><i className="material-icons">search</i></button>
          </FormSearchBreed>
        </ImageBackground>

        <SectionMostSearched>
          <TextMostSearched>Most Searched Breeds</TextMostSearched>

          <div className="container-section">
            <ContainerSectionTitle>
              <h2>66+ Breeds For you to discover</h2>
            </ContainerSectionTitle>
            <div className="container-see-more">
              <Link href="/">
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
            <Link href="/">
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
