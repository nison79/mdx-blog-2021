import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data;
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero />
      <Posts posts={posts} title="All posts"/>
    </Layout>
  )
}


export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "Do MMM YYYY")
          readTime
          slug
          title
          image {
            childImageSharp {
              fluid {
               ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default PostsPage
