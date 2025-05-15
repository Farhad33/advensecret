'use client'
import styled, { keyframes, css } from 'styled-components'
import Image from "next/image"
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'
import servicesData from './servicesData.json'
import Service from './Service'

export default function Services() {

    return (
        <MainContainer column center>
            <Title variant='h1'>Features</Title>
            <ServicesContainer>
                {servicesData.map((service, index) => (
                    <Service key={index} {...service} />
                ))}
            </ServicesContainer>
        </MainContainer>
    )
}

const ServicesContainer = styled(Container)`
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(4, 1fr);
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
const MainContainer = styled(Container)`
    padding: 200px 0;
`
const Title = styled(Typography)`
    text-align: center;
`
const Description = styled(Typography)`
    text-align: center;
    width: 80%;
`