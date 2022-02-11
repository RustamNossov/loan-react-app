import React from "react";
import { Helmet } from 'react-helmet';
import MainSlideComponent from "../MainSlide/MainSlide";

function MainSlidePage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main page"
                />
                <title>Bringitup</title>
            </Helmet>
                <MainSlideComponent
                            url={'mainPageSlider'} 
                            containerItem = {'.showup__content-slider-container'}
                            oneSlideWidth = {331}
                            activityClass = {'slick-current'}
                            selectors={['.card']}
                            isInfinity={false}
                            />

        </>
    )
}

export default MainSlidePage;