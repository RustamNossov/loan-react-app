import React from "react";
import { Helmet } from 'react-helmet';
import TheDifference from '../TheDifference/TheDifference';

function TheDifferencePage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="The difference between education 10 years ago and today"
                />
                <title>Bringitup</title>
            </Helmet>
                <TheDifference/>

        </>
    )
}

export default TheDifferencePage;