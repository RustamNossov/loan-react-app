import React from "react";
import { Helmet } from 'react-helmet';
import Shedule from '../Shedule/Shedule';

function ShedulePage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <Shedule/>

        </>
    )
}

export default ShedulePage;