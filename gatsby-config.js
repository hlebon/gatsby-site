module.exports = {
  pathPrefix: "/gatsby-site",
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
              name: `src`,
              path: `${__dirname}/src`
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
