import React from "react";
import { Helmet } from 'react-helmet';
import Error from '../Error/Error'

function ErrorPage() {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Error page"
                />
                <title>Error</title>
            </Helmet>
                <Error/>

        </>
    )
}

export default ErrorPage;