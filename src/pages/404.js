import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <h3>Sorry, the page cannot found</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
