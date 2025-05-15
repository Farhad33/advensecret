'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import reviewsData from './reviewsData.json'
import Review from './Review'
import Typography from '@/components/common/Typography'

export default function Reviews() {
    return (
        <MainContainer column center>
            <Typography variant='h1'>Testimonials</Typography>
            <ReviewsContainer>
                {reviewsData.map((review) => (
                    <Review key={review.name} {...review} />
                ))}
            </ReviewsContainer>
        </MainContainer>
    )
}

const ReviewsContainer = styled(Container)`
    display: grid;
    gap: 40px;
    padding: 20px 150px;
    grid-template-columns: repeat(2, 1fr);
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 940px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px 30px;
    }
`
const MainContainer = styled(Container)`
    margin-top: 50px;
    h1 {
        margin-bottom: 70px;
    }
`