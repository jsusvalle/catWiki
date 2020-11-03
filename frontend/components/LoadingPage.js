import React from 'react';
import styled from '@emotion/styled';
import {keyframes, css} from '@emotion/core';

const SkStretchdelay = keyframes`
    0%, 40%, 100% { 
        transform: scaleY(0.4);
    }  20% { 
        transform: scaleY(1.0);
    }
`;

const Spinner = styled.div`
    margin: 16rem auto;
    width: 30rem;
    height: 15rem;
    text-align: center;
    font-size: 10px;
    & > div {
        background-color: #333;
        height: 100%;
        width: 1rem;
        display: inline-block;
        margin-right: 2px;
        
        animation: ${SkStretchdelay} 1.2s infinite ease-in-out;
    }
`;

const LoadingPage = () => {
    return (  
        <Spinner>
            <div></div>
            <div css={css`animation-delay: -1.1s!important;`} 
            ></div>
            <div css={css`animation-delay: -1.0s!important;`} 
            ></div>
            <div css={css`animation-delay: -0.9s!important;`} 
            ></div>
            <div css={css`animation-delay: -0.8s!important;`} 
            ></div>
        </Spinner>
    );
}

export default LoadingPage;