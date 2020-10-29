import React from 'react';
import {Global, css} from '@emotion/core';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return (
        <>
            <Global 
                styles={css`
                    :root {
                        --brown-text: rgba(41, 21, 7, 1);
                        --background-main: rgba(227, 225, 220, 1);
                        --shadow-image: rgba(222, 198, 139, 1);
                        --text-transparency-brown: rgba(41, 21, 7, 0.6);
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem;
                        font-family: 'Montserrat', sans-serif;
                    }
                    main {
                        max-width: 1200px;
                        margin: 0 auto;
                        width: 90%;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-weight: 700;
                    }
                    p {
                        margin: 0;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }
                    img {
                        max-width: 100%;
                    }
                `}
            />

            <Head>
                <title>CatWiki</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" /> 
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
            </Head>
        
            <Header />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Layout;