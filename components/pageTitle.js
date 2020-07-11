import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return(
        <Head>
            <title>{title} - The Burger Shack</title>
        </Head>
    )
}

export default PageTitle