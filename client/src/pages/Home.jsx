import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import { Card } from '../components/Card'

const Container = styled.div`
height:100%;
overflow-y:scroll;
background:${({ theme }) => theme.background};
padding:30px 30px;
padding-bottom:50px;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
@media(max-width:768px){
    padding:6px 10px;
}
 `

const HeadLine = styled.div`
 font-size:24px;
 font-weight:600;
 color:${({ theme }) => theme.text_primary};
 text-align:center;
 @media(max-width:768px){
    font-size:22px;
 }
 `

const Span = styled.span`
 font-size:30px;
 font-weight:400;
 color:${({ theme }) => theme.secondary};
 @media(max-width:768px){
    font-size:20px;
}
 `

const Wrapper = styled.div`
width:100%;
max-width:1400xp;
padding:32px 0px;
 display:flex;
 justify-content:center;
 flex-direction:column;
 gap:20px;
 `

const CardWrapper = styled.div`
 display:grid;
 gap:20px;
 @media(max-width:1200px){
     grid-template-coulums:repeat(4,1fr)
 }
 @media(min-width=768px) and (max-width:1200px){
     grid-template-coulumns:repeat(4,1fr)
 }
      @media(max-width:639px){
     grid-template-coulums:repeat(3,1fr)
 }
 `
const Home = () => {
    return (
        <Container>
            <HeadLine>Explorer les posts de la communauté! <Span>• Inspiré par l'humain et réaiser par l'IA •</Span></HeadLine>

            <SearchBar />
            <Wrapper>
                <CardWrapper>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardWrapper>

            </Wrapper>
        </Container>
    )
}

export default Home