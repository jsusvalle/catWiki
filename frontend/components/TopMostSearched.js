import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import {mq} from '../components/layouts/styles/index';

const ContainerImage = styled.div`
    margin-bottom: 6rem;
    ${[mq[1]]} {
        display: grid;
        grid-template-columns: 20% 80%;
        column-gap: 3rem;
    }
    div {
        img {
            border-radius: 3rem;
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        h3 {
            font-weight: 600;
            font-size: 3.6rem;
            color: var(--brown-text);
            cursor: pointer;
        }
        p {
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 1.5;
        }
    }
`;

const TopMostSearched = ({breed, index}) => {

    const {name, description, imageURL} = breed;

    return (  
        <ContainerImage>
            <div>
                <img src={imageURL} alt={`photo of cat breed ${name}`}/>
            </div>

            <div>
                <Link href='/breeds/[name]' as={`/breeds/${name}`} >
                    <h3>{index}. {name}</h3>
                </Link>
                <p>{description}</p>
            </div>
        </ContainerImage>
    );
}

export default TopMostSearched;