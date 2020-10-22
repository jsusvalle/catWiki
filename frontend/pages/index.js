import React, {useEffect, useState, useContext} from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';

import {CatWikiContext} from '../context/CatWikiContext';

const ImageBackground = styled.div`
  background-image: url('/static/images/HeroImagesm.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  width: 100%;
  height: 30rem;
  @media (min-width: 768px) {
    height: 40rem;
    background-image: url('/static/images/HeroImagemd.png');
  }
  @media (min-width: 1024px) {
    height: 50rem;
    background-image: url('/static/images/HeroImagelg.png');
  }
`;

const Logo = styled.div`
  padding-top: 3rem;
  margin-left: 3rem;
  @media (min-width: 768px) {
    padding-top: 7rem;
    margin-left: 7rem;
  }
  @media (min-width: 1024px) {
    padding-top: 10rem;
    margin-left: 10rem;
  }
  img {
    filter: invert(100%);
    width: 50%;
    min-width: 10rem;
    max-width: 35rem;
    @media (min-width: 768px) {
      width: 80%;
    }
    @media (min-width: 1024px) {
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
  @media (min-width: 768px) {
    width: 40%;
    margin-left: 7rem;
  }
  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 10rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.4rem;
    }
  }
`;

const FormSearchBreed = styled.form`
  margin: 3rem 0 0 3rem;
  display: flex;
  align-content: center;
  @media (min-width: 768px) {
    margin-left: 7rem;
  }
  @media (min-width: 1024px) {
    margin-left: 10rem;
  }
  input {
    display: inline-block;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border: none;
    padding: 1rem 1rem;
    width: 15rem;
    @media (min-width: 768px) {
      width: 20rem;
    }
    @media (min-width: 1024px) {
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
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    @media (min-width: 1024px) {
      font-size: 4.8rem;
    }
  }
`;

// TODO
const ContainerSectionButton = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-transparency-brown);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const SectionMostSearched = styled.section`
  background-color: var(--background-main);
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  width: 100%;
  p {
    padding-top: 2rem;
    margin-left: 3rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--brown-text);
    @media (min-width: 768px) {
      font-size: 1.5rem;
      padding-top: 3rem;
      margin-left: 7rem;
    }
    @media (min-width: 1024px) {
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
  }  

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

const SectionCatsDiscover = styled.div`
  margin: 0 auto;
  width: 83%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Home = () => {

  const {callApiCat} = useContext(CatWikiContext);

  useEffect (() => {
    callApiCat();
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
          <p>Most Searched Breeds</p>

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
            
          </SectionCatsDiscover>
        </SectionMostSearched>
      </Layout>
  )
}

export default Home;
