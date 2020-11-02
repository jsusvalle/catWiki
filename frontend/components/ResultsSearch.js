import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const ContainerResult = styled.div`
    margin: 0 auto;
    font-size: 1.8rem;
    padding: 2rem 1rem;
    transition: 0.5s ease background-color;
    &:hover {
        background-color: var(--background-main);
        cursor: pointer;
    }
`;

const ResultsSearch = ({name}) => {
    return ( 
        <ContainerResult>
            <Link href='/breeds/[name]' as={`/breeds/${name}`}>
                <p>{name}</p>
            </Link>
        </ContainerResult>
    );
}

export default ResultsSearch;