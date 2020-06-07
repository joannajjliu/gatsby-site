//use "rfc" - function based component
//use "rcc" - class based component
import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby-link"
import { graphql } from "gatsby"

const BlogPage = ({data}) => {
    return (
        <Layout>
            <SEO title="blog" />
            <div>
                <h1>latest posts</h1>
                {data.allMarkdownRemark.edges.map(post => (
                    <div key = {post.node.id}>
                        <h3>{ post.node.frontmatter.title } </h3>
                        <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
                        <br /><br />
                        <Link to={post.node.frontmatter.path}>Read more</Link>
                        <br /><br />
                        <hr />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        date
                        title
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage;
