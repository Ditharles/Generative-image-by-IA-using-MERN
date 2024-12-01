import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = styled.div`
position:relative;
display:flex;
border-radius:20px;
box-shadow:1px 2px 40px 8px ${({ theme }) => theme.black + 60};
cursor:pointer;
transition:all 0.3s ease;
&:hover{
box-shadow:1px 2px 40px 8px ${({ theme }) => theme.primary};
   scale:1.05;
}
    &:nth-child(7n+1){
        grid-column:auto/span 2;}
`;

const HoverOverlay = styled.div``
const Prompt = styled.div``;
const Author = styled.div``;

export const Card = () => {
    return (
        <ImageCard>
            <LazyLoadImage
                style={{ borderRadius: "20px" }}
                width={"100%"}
                src="https://picsum.photos/200/300"
            />
            <HoverOverlay>
                <Prompt>prompt</Prompt>
                <Author>author</Author>
            </HoverOverlay>

        </ImageCard>
    )
}
