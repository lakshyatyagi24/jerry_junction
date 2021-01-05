import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroBtn, HeroItems, HeroH1, HeroP } from './HeroElements';
import Si from './SidebarElements';


const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1> Greatest Food Ever </HeroH1>
                    <HeroP>Feel the Taste</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
