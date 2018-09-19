import React, { Component } from "react";
import Layout, { Header, PostList } from "../components";
import "../layouts/index.css";
import "../layouts/app.css";

export default function Index(query) {
  // const { edges } = query.data.allContentfulPost;
  return (
    <Layout>
      <div>
        <Header />
        <PostList />
      </div>
    </Layout>
  );
}
