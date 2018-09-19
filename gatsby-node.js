const path = require("path");
/*
const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve(`src/templates/tags.js`);
  const allTagsTemplate = path.resolve(`src/templates/all-tags.js`);

  const postsByTags = {};

  posts.forEach(({ node }) => {
    if (node.tags) {
      node.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = [];
        }

        postsByTags[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTags);
  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  });

  tags.forEach(tagName => {
    const posts = postsByTags[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName
      }
    });
  });
};

*/

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const gql = graphql(`
    {
      allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            id
            date
            path
            title
            excerpt
            author
            tags
          }
        }
      }
    }
  `);

  gql.then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    console.log("results", result);
    const posts = result.data.allContentfulPost.edges;
    console.log("POST", posts);

    // createTagPages(createPage, posts);

    posts.forEach(({ node }, index) => {
      console.log(node);
      createPage({
        path: node.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node
        }
      });
    });
  });

  return gql;
};
