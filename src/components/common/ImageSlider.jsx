'use client';
import styled from 'styled-components';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { color } from '@/components/common/Theme'


const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
];

export default function ImageSlider() {
    return (
        <MainContainer>
            <Carousel
                infiniteLoop
                showArrows
                autoPlay
                showThumbs={true}
                interval={2000}
                swipeable
                showStatus
                useKeyboardArrows
                emulateTouch
                renderThumbs={() =>
                    images.map((src, index) => (
                        <div key={index}>
                            <Thumbnail src={src} alt={`Thumb ${index}`} />
                        </div>
                    ))
                }
            >
                {images.map((src, index) => (
                    <div key={index}>
                        <MainImageWrapper>
                            <MainImage src={src} alt={`Image ${index}`} />
                        </MainImageWrapper>
                    </div>

                ))}
            </Carousel>
        </MainContainer>
    );
}

const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: ${color.main};
  max-width: fit-content;
  margin: 0 auto;
`;

const MainImage = styled.img`
  height: 500px;
  width: auto;
  object-fit: contain;
  display: block;
  border-radius: 12px;
`;



const Thumbnail = styled.img`
  height: 100px;
  width: auto;
  object-fit: contain;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  .carousel .thumbs-wrapper {
    display: flex;
    justify-content: center;
  }

  .carousel .thumbs {
    display: flex;
    justify-content: center;
  }
`