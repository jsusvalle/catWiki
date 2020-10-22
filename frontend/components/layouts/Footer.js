import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const ContainerFooter = styled.footer`   
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    img {
        margin: 3rem 0;
        filter: invert(100%);
    }

    div {
        margin: 3rem 0;
        p {
            font-size: 1.8rem;
            color: #ffff;
        }
    }
`;

const Footer = () => {
    return (  
        <ContainerFooter>
            <Link href="/">
                <img src="/static/images/CatwikiLogo.svg" alt="Logo CatWiki"/>
            </Link>

            <div>
                <p>&copy; Jesus Valle - devchallenge.io 2020</p>
            </div>
        </ContainerFooter>
    );
}

export default Footer;