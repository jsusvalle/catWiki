import React from 'react';
import styled from '@emotion/styled';

const ContainerImage = styled.div`
    min-width: 5rem;
    max-width: 22rem;
    p {
        color: var(--brown-text);
        padding-top: 1.5rem;
        font-size: 1.8rem;
        font-weight: 600;
    }
`;

const ImageCat = styled.img`
    border-radius: 3rem;
    width: 100%;
    height: 22rem;
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