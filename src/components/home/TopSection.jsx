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
        <Home src="/top-section.jpg" alt="Yazd" />
        <Layer src="/layer.png" alt="Layer" />
      </TopSectionContainer>
    </MainContainer>
  )
}

const LeftContainer = styled(Container)`
  align-items: center;
  justify-content: center;

  width: 50%;
`
const BookService = styled(Button)`
  margin-top: 50px;
  align-self: center;
`
const Title = styled(Typography)`
`
const Description = styled(Typography)`
  width: calc(5vw + 280px);
  margin-top: 20px;
  @media screen and (max-width: 690px) {
    display: none;
  }
`
const MainContainer = styled(Container)`
  width: 100%;
`
const TopSectionContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 690px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Layer = styled.img`
  width: 50%;
  position: absolute;
  top: 100px;
  right: 0;
  z-index: -1;
`
const Home = styled.img`
  border: 5px solid ${color.red};
  width: 50%;
  margin-top: 200px;
  border-radius: 450px 450px 0 0;
`