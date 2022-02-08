import React from "react";
import { Helmet } from 'react-helmet';
import TheDifference from '../TheDifference/TheDifference';

function TheDifferencePage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <TheDifference/>

        </>
    )
}

export default TheDifferencePage;