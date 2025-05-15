'use client'
import { useState } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Container from '@/components/common/Container'
import TopSection from '@/components/home/TopSection'
import Services from '@/components/home/Services'
import Reviews from '@/components/home/Reviews'
import ImageSlider from '@/components/common/ImageSlider'
import TypeForm from '@/components/common/TypeForm'

export default function HomeComponents() {
    const [showTypeForm, setShowTypeForm] = useState(false)

    return (
        <Container column center>
            <TypeForm setShowTypeForm={setShowTypeForm} showTypeForm={showTypeForm} />
            <Header />
            <TopSection setShowTypeForm={setShowTypeForm} showTypeForm={showTypeForm} />
            <ImageSlider />
            <Services />
            <Reviews />
            <Footer setShowTypeForm={setShowTypeForm} showTypeForm={showTypeForm} />
        </Container>
    )
}