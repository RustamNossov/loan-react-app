import React from "react";
import { Helmet } from 'react-helmet';
import HowAreYouShowingUp from '../HowAreYouShowingUp/HowAreYouShowingUp';

function HowAreYouShowingUpPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <HowAreYouShowingUp/>

        </>
    )
}

export default HowAreYouShowingUpPage;