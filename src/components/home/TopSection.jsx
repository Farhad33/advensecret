'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'


export default function HomeTopSection({ setShowTypeForm }) {

  return (
    <MainContainer>
      <TopSectionContainer>
        <LeftContainer column>
          <Title variant='h1'>Don’t Plan Your Trip.</Title>
          <Title variant='h1'>Let the Trip Find You.</Title>
          <Description variant='body2'>Answer to a set of questions, and we’ll design a one of a kind surprise journey, perfectly crafted to your vibe. No stress, no spoilers, just pure adventure.</Description>
          <BookService onClick={setShowTypeForm} variant='secondary' size='large'>Design My Adventure</BookService>
        </LeftContainer>
        <RightContainer>
          <Home src="/top-section.jpg" alt="Yazd" />
          <Layer src="/layer.png" alt="Layer" />
        </RightContainer>
      </TopSectionContainer>
    </MainContainer>
  )
}
const TopSectionContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`
const RightContainer = styled(Container)`
  position: relative;
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
const LeftContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 30px;
  }
`
const Layer = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
`
const Home = styled.img`
  border: 5px solid ${color.red};
  border-radius: 450px 450px 0 0;
  z-index: 2;
  width: 100%;
  margin-top: 10vw;
  @media screen and (max-width: 700px) {
    margin-top: 20vw;
  }
`
const BookService = styled(Button)`
  margin-top: 50px;
  align-self: center;
`
const Title = styled(Typography)`
  font-size: 60px;
  margin-bottom: 30px;

  @media screen and (max-width: 1110px) {
    font-size: 40px;
  }
  @media screen and (max-width: 750px) {
    font-size: 30px;
  }
`;

const Description = styled(Typography)`
  width: calc(5vw + 280px);
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 25px;
  }
`
const MainContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

