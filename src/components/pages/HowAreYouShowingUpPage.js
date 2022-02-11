import React from "react";
import { Helmet } from 'react-helmet';
import HowAreYouShowingUpComponent from "../HowAreYouShowingUp/HowAreYouShowingUp";

function HowAreYouShowingUpPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="How are you Showing Up & Evolving"
                />
                <title>Bringitup</title>
            </Helmet>
                <HowAreYouShowingUpComponent
                        url={'howAreYouSlider'} 
                        containerItem = {'.feed__slider-container'}
                        oneSlideWidth = {273}
                        activityClass = {'feed__item-active'}
                        selectors={['.feed__item']}
                        isInfinity={false}
                        />

        </>
    )
}

export default HowAreYouShowingUpPage;