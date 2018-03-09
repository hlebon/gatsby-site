module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Fullstack blog`,
    keywords: 'blog'
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    }
  ],
}
