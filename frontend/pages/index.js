import React, {useEffect, useState, useContext} from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/layouts/Layout';
import BreedPopularIndex from '../components/BreedPopularIndex';

import {CatWikiContext} from '../context/CatWikiContext';

const breakpointsMediaQuerys = [481, 769, 1025, 1201]

const mq = breakpointsMediaQuerys.map(
  bp => `@media (min-width: ${bp}px)`
)

const ImageBackground = styled.div`
  background-image: url('/static/images/HeroImagesm.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  width: 100%;
  height: 30rem;
  ${[mq[1]]} {
    height: 40rem;
    background-image: url('/static/images/HeroImagemd.png');
  }
  ${[mq[2]]} {
    height: 50rem;
    background-image: url('/static/images/HeroImagelg.png');
  }
`;

const Logo = styled.div`
  padding-top: 3rem;
  margin-left: 3rem;
  ${[mq[1]]} {
    padding-top: 7rem;
    margin-left: 7rem;
  }
  ${[mq[2]]} {
    padding-top: 10rem;
    margin-left: 10rem;
  }
  img {
    filter: invert(100%);
    width: 50%;
    min-width: 10rem;
    max-width: 35rem;
    ${[mq[1]]} {
      width: 80%;
    }
    ${[mq[2]]} {
      width: 100%;
    }
  }
`;

const TextSection = styled.div`
  min-width: 20rem;
  max-width: 35rem;
  width: 50%;
  margin-left: 3rem;
  margin-top: 2rem;
  ${[mq[1]]} {
    width: 40%;
    margin-left: 7rem;
  }
  ${[mq[2]]} {
    width: 100%;
    margin-left: 10rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    ${[mq[1]]} {
      font-size: 1.8rem;
    }
    ${[mq[2]]} {
      font-size: 2.4rem;
    }
  }
`;

const FormSearchBreed = styled.form`
  margin: 3rem 0 0 3rem;
  display: flex;
  align-content: center;
  ${[mq[1]]} {
    margin-left: 7rem;
  }
  ${[mq[2]]} {
    margin-left: 10rem;
  }
  input {
    display: inline-block;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border: none;
    padding: 1rem 1rem;
    width: 15rem;
    ${[mq[1]]} {
      width: 20rem;
    }
    ${[mq[2]]} {
      width: 30rem;
    }
  }
  button {
    padding: .5rem 0;
    background-color: #fff;
    border: none;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    i {
      width: 5rem;
    }
  }
`;

const ContainerSectionTitle = styled.div`
  
  h2 {
    color: var(--brown-text);
    font-size: 1.8rem;
    margin-top: 2rem;
    ${[mq[1]]} {
      font-size: 3rem;
    }
    ${[mq[2]]} {
      font-size: 4.8rem;
    }
  }
`;

const ContainerSectionButton = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-transparency-brown);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.3rem;
  ${[mq[1]]} {
    font-size: 1.5rem;
  }
  ${[mq[2]]} {
    font-size: 1.8rem;
  }
`;

const SectionMostSearched = styled.section`
  background-color: var(--background-main);
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  width: 100%;

  .container-section {
    margin: 0 auto;
    width: 83%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .container-see-more {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
    }
  }
`;

const TextMostSearched = styled.p`
  padding-top: 2rem;
  margin-left: 3rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--brown-text);
  ${[mq[1]]} {
    font-size: 1.5rem;
    padding-top: 3rem;
    margin-left: 7rem;
  }
  ${[mq[2]]} {
    font-size: 1.8rem;
    padding-top: 5rem;
    margin-left: 10rem; 
  }
  &::after {
    content: '';
    display: block;
    margin-top: 1rem;
    width: 7rem;
    height: 0.3rem;
    border-radius: 3rem;
    background-color: var(--brown-text);
  }
`;

const SectionCatsDiscover = styled.div`
  padding: 5rem 0 10rem 0;
  margin: 0 auto;
  width: 83%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  ${[mq[1]]} {
    grid-template-columns: repeat(4, 1fr);
    justify-items: initial;
  }
`;

const SectionArticle = styled.section`
  padding: 7rem 0;
  display: grid;
  grid-row-gap: 5rem;
  ${[mq[1]]} {
    padding: 12rem 7rem;
    grid-template-columns: repeat(2, 1fr);
  }
  ${ContainerSectionTitle} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 4rem;
      &::before {
        content: '';
        display: block;
        margin-top: 1rem;
        width: 7rem;
        height: 0.3rem;
        border-radius: 3rem;
        background-color: var(--brown-text);
      }
    }
    p {
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  ${ContainerSectionButton} {
    margin-top: 3rem;
  }
`;

const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5,minmax(0,1fr));
  gap: 1rem;
  max-width: 520px;
  img {
    width: 100%;
    display: inline-block;
  }
`;

const Home = () => {

  const [popularbreeds, savePopularBreeds] = useState([]);

  const {getMostSearched} = useContext(CatWikiContext);

  useEffect (() => {
    const consultApi = async () => {
      let imagesPopularBreeds = await getMostSearched(4);
      savePopularBreeds(imagesPopularBreeds);
    }
    consultApi();
  }, []);

  return (
      <Layout>
        <ImageBackground>
          <Logo>
            <img src="/static/images/CatwikiLogo.svg" alt="Logo CatWiki" loading="lazy" />
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
            {popularbreeds && popularbreeds.map(imagesCat => (
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

export default Home;
