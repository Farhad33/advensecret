'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import { color } from '@/components/common/Theme'

export default function Review({ name, imageUrl, review }) {

    return (
        <ReviewContainer column>
            <Image src={imageUrl} alt={name} width='200' height='200' />
            <div>
                <Typography variant='body2'>“{review}”</Typography>
                <Title variant='h2'>- {name}</Title>
            </div>
        </ReviewContainer>
    )
}
const Image = styled.img`
    height: 200px;
    border-radius: 10px;
    margin-right: 10px;
`
const Title = styled(Typography)`
    color: ${color.green};
`
const ReviewContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    svg {
        width: 100% !important;
        height: 300px !important;
        @media screen and (max-width: 1100px) {
            height: 250px !important;
        }
    }
    box-shadow: 0px 0px 20px -1px ${color.green};
    &:hover {
    }
`