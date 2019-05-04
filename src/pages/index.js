import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default () => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allImageSharp.edges.map(item => (
          <div>
            <h1>{item.node.fluid.originalName}</h1>
            <Img key={item.node.id} fluid={item.node.fluid} />
          </div>
        ))}
      </div>
    )}
  />
)
