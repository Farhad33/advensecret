'use client'
import styled, { keyframes, css } from 'styled-components'
import Image from "next/image"
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { useRouter } from 'next/navigation'
import { color } from '@/components/common/Theme'

export default function Service({ title, description }) {
    const { push } = useRouter()

    const handleBookNow = () => {
        Zenbooker.showPopupWidget(bookLink)
    }

    return (
        <ServiceContainer column>
            <Typography variant='h2'>{title}</Typography>
            <Typography variant='body2'>{description}</Typography>
        </ServiceContainer>
    )
}

const LinksContainer = styled(Container)`
    justify-content: space-evenly;
    align-items: center;
    margin-top: auto;
`
const ServiceContainer = styled(Container)`
    padding: 20px;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    img {
        width: 100%;
        height: auto;
    }
    h2 {
        text-align: center;
        margin: 10px 0;
    }
    p {
        margin-bottom: 10px;
    }
    &:hover {
        box-shadow: 0px 0px 20px -1px ${color.green};
    }
`