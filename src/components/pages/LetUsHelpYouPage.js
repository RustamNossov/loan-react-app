import React from "react";
import { Helmet } from 'react-helmet';
import LetUsHelpYou from '../LetUsHelpYou/LetUsHelpYou';

function LetUsHelpYouPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Help page"
                />
                <title>Bringitup</title>
            </Helmet>
                <LetUsHelpYou/>

        </>
    )
}

export default LetUsHelpYouPage;