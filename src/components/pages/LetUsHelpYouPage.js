import React from "react";
import { Helmet } from 'react-helmet';
import LetUsHelpYou from '../LetUsHelpYou/LetUsHelpYou';

function LetUsHelpYouPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <LetUsHelpYou/>

        </>
    )
}

export default LetUsHelpYouPage;