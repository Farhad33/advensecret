'use client'
import { useState } from 'react'
import Styled, { css } from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import VfixLogoSvg from '@/svg/VfixLogoSvg'
import { color } from '@/components/common/Theme'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'

export default function Menu() {
    const [open, setOpen] = useState(false)
    const { push } = useRouter()

    const handleBookNow = () => {
        Zenbooker.showPopupWidget('https://widget.zenbooker.com/book/1602564569602x960307736376989400?embed=true')
    }

    return (
        <Header $open={open}>
            <Logo src="./logo.jpg" />
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
        </Header>
    )
}

const Header = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    background: #f5eedc;
    box-shadow: -9px 15px 40px -10px rgba(0, 0, 0, 0.3);
    z-index: 11;
`

const SocialMediaIcon = Styled.img`
    width: 30px;
    height: auto;
`
const Logo = Styled.img`
    width: 65px;
    height: auto;
`
const SocialMediaContainer = Styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 700px) {
        gap: 15px;
    }
`

const SocialMediaLink = Styled(Link)`
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