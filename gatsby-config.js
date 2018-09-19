module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Fullstack blog`,
    keywords: "blog"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1jeiz63qbsu5`,
        accessToken: `a696a82c519e86c878766d551f6ecd4d0c5b3d3fbc4405eb3fd33b68deba9446`
      }
    }
  ]
};
