'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'
import Link from 'next/link'

export default function Footer({ setShowTypeForm, showTypeForm }) {

    return (
        <FooterContainer column>
            <TopContainer column center>
                <Typography variant='h2'>Don’t Plan Your Trip.Let the Trip Find You.</Typography>
                <Typography variant='body1'>Answer to a set of questions, and we’ll design a one of a kind surprise journey, perfectly crafted to your vibe. No stress, no spoilers, just pure adventure.</Typography>
                <Button onClick={() => setShowTypeForm(!showTypeForm)} variant='secondary' size='large'>Design My Adventure</Button>
            </TopContainer>
            <SocialMediaContainer>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./insta.avif" />
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./facebook.avif" />
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./in.avif" />
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./x.avif" />
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./you.avif" />
                </SocialMediaLink>
                <SocialMediaLink href="#">
                    <SocialMediaIcon src="./tik.avif" />
                </SocialMediaLink>
            </SocialMediaContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled(Container)`
    margin-top: 150px;
    padding: 50px;
    @media (max-width: 768px) {
        margin-top: 150px;
        margin-bottom: 0px;
    }
    transition: all 0.3s ease-in-out;
`
const TopContainer = styled(Container)`
    background-color: ${color.green};
    color: white;
    padding: 30px 20px;
    margin: 0 100px;
    border-radius: 30px;
    position: relative;
    top: -150px;
    p {
        margin: 20px 0;
    }
    @media (max-width: 768px) {
        margin: 0;
        p {
            display: none;
        }
        h2 {
            font-size: 20px;
            text-align: center;
            margin-bottom: 15px;
        }
    }
    transition: all 0.3s ease-in-out;
`
const SocialMediaIcon = styled.img`
    width: 30px;
    height: auto;
`
const SocialMediaContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 auto;
`

const SocialMediaLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: black;
    transition: 0.5s;
    &:hover {
        transform: scale(1.5);
    }
`