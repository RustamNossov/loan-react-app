import React from "react";
import { Helmet } from 'react-helmet';
import MainSlideComponent from "../MainSlide/MainSlide";

function MainSlidePage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <MainSlideComponent
                            url={'mainPageSlider'} 
                            containerItem = {'.showup__content-slider-container'}
                            oneSlideWidth = {331}
                            activityClass = {'first'}
                            selectors={['.card__controls-arrow', '.card__title']}
                            isInfinity={false}
                            />

        </>
    )
}

export default MainSlidePage;