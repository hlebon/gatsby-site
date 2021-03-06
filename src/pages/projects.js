import React, { Component } from "react";
import { Link, withPrefix } from "gatsby";

let projectsToShow = [
  "crm-api",
  "reactnv-todoapp",
  "gatsby-site",
  "react-github-battle",
  "react-todolist",
  "react-udacimeals",
  "search-image-app",
  "cpa-landingpage",
  "contacts",
  "udacifitness",
  "reactnd-project-myreads-starter",
  "dynamic-csharp-concepts",
  "notetaker"
];

class Project extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.setState({
      repos: null
    });

    fetch(`https://api.github.com/users/hlebon/repos`)
      .then(repos => repos.json())
      .then(repos => {
        this.setState({
          repos: repos.filter(repo => {
            return projectsToShow.includes(repo.name) > 0 ? true : false;
          })
        });
      });
  }
  render() {
    const { repos } = this.state;
    return (
      <div>
        <h1>Personal Projects</h1>
        <div>
          <ul>
            {repos ? (
              repos.map(repo => {
                return (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank">
                      {repo.description}
                    </a>
                    <small style={styles.langLabel}>{repo.language}</small>
                  </li>
                );
              })
            ) : (
              <h2>Loading...</h2>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  langLabel: {
    height: "20px",
    padding: "0.15em 4px",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "15px",
    borderRadius: "2px",
    boxShadow: "inset 0 -1px 0 rgba(27,31,35,0.12)",
    marginLeft: "5px"
  }
};

export default Project;
