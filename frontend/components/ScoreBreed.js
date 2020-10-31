import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const ContainerScore = styled.div`
    display: flex;
    max-width: 480px;
    flex: 1 1;
`;

const ScoreSpan = styled.span`
    flex: 1 1;
    height: 10px;
    border-radius: 8px;
    margin-right: 8px;
`;

const ScoreBreed = ({total = 5, score}) => {

    const renderScores = () => {
        const scores = [];
        
        for (let i = 0; i < total; i++) {
            const scoreBackground = i < score ? 'var(--score-background)' : 'var(--background-main)';
            scores.push(<ScoreSpan css={css` background-color: ${scoreBackground};`} key={i}></ScoreSpan>);
        }
    
        return scores;
    };
    
    return <ContainerScore>{renderScores()}</ContainerScore>;
}

export default ScoreBreed;