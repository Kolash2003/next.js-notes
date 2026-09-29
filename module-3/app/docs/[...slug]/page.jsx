import React from 'react'

const DocsPage = async ({ params }) => {
    const { slug } = await params;
    console.log(slug);
    return (
        <div>DocsPage {slug}</div>
    )
}

export default DocsPage