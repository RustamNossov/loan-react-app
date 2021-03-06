import React from "react";
import { Helmet } from 'react-helmet';
import ExploreModulesComponent from "../ExploreModules/ExploreModules";

function ExploreModulesPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Explore the Modules"
                />
                <title>Bringitup</title>
            </Helmet>
                <ExploreModulesComponent 
                            url={'exploreMoreSlider'} 
                            containerItem = {'.modules__content-slider-container'}
                            oneSlideWidth = {320}
                            activityClass = {'slick-current'}
                            selectors={['.card']}
                            isInfinity={true}
                            />

        </>
    )
}

export default ExploreModulesPage;