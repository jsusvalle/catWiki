import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Container = styled.div`   
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    img {
        margin: 3rem 0;
        cursor: pointer;
    }
`;



const Header = () => {
    return ( 
        <Container>
            <Link href="/">
                <img src="/static/images/CatwikiLogo.svg" alt="Logo CatWiki"/>
            </Link>
        </Container>
    );
}


export default Header;