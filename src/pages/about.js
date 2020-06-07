//use "rfc" - function based component
//use "rcc" - class based component
import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
    return (
        <Layout>
            <SEO title="about" />
            <div>
                <h1>About us</h1>
                <p>Qui mollit reprehenderit amet ea non magna ea consectetur nisi duis irure sit et. Enim est eiusmod excepteur irure. Anim laboris do mollit duis ad ipsum occaecat ea excepteur id proident culpa consequat velit. Ex nulla Lorem ad elit fugiat exercitation adipisicing minim qui amet duis.</p>
            </div>
        </Layout>
    )
}
