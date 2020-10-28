import React from 'react';
import styled from '@emotion/styled';

const breakpointsMediaQuerys = [481, 769, 1025, 1201]

const mq = breakpointsMediaQuerys.map(
    bp => `@media (min-width: ${bp}px)`
);

const ContainerImage = styled.div`
    position: relative;
    &:first-child::before {
        content: '';
        display: inline;
        background-color: var(--shadow-image);
        width: 5rem;
        height: 10rem;
        position: absolute;
        top: calc(50% - 7rem);
        left: -1rem;
        border-radius: 3rem;
        ${[mq[1]]} {
            top: calc(50% - 8rem);
        }
        ${[mq[2]]} {
            top: calc(50% - 8rem);
            height: 15rem;
        }
    }
    p {
        color: var(--brown-text);
        padding-top: 1.5rem;
        font-size: 1.8rem;
        font-weight: 600;
    }
`;

const ImageCat = styled.img`
    object-fit: cover;
    border-radius: 3rem;
    height: 12rem;
    min-width: 12rem;
    max-width: 30rem;
    z-index: 10;
    position: relative;
    ${[mq[3]]} {
        height: 22rem;
    }
`;

const BreedPopularIndex = ({imagesCat}) => {

    return (  
        <ContainerImage>
            <ImageCat src={imagesCat.imageURL} alt={`image of breed cat: ${imagesCat.name}`} />
            <p>{imagesCat.name}</p>
        </ContainerImage>
    );
}

export default BreedPopularIndex;