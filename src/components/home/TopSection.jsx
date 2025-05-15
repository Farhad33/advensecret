'use client'
import { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Image from "next/image"
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'



export default function HomeTopSection() {
  const [showTypeForm, setShowTypeForm] = useState(false)
  const handleBookNow = () => {
    setShowTypeForm(showTypeForm => !showTypeForm)
  }

  return (
    <MainContainer>
      <TypeForm $isShow={showTypeForm}>
        <Close onClick={handleBookNow}>X</Close>
        <div data-tf-live="01JTSGFGCPX4J3SW0YN4PPZDVZ" ></div>
      </TypeForm>
      <TopSectionContainer>
        <LeftContainer column>
          <Title variant='h1'>Don’t Plan Your Trip.</Title>
          <Title variant='h1'>Let the Trip Find You.</Title>
          <Description variant='body2'>Answer to a set of questions, and we’ll design a one of a kind surprise journey, perfectly crafted to your vibe. No stress, no spoilers, just pure adventure.</Description>
          <BookService onClick={handleBookNow} variant='secondary' size='large'>Design My Adventure</BookService>
        </LeftContainer>
        <Home src="/top-section.jpg" alt="Yazd" />
      </TopSectionContainer>
    </MainContainer>
  )
}
const TypeForm = styled.div`
  display: ${({ $isShow }) => ($isShow ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 50%;
`
const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
`
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
const Home = styled.img`
	/* width: calc(15vw + 300px);
	height: calc(15vw + 300px); */
  width: 50%;
`