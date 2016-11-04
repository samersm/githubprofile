import React, { Component } from 'react';


class Repo extends Component {

  render() {
      const {repo} = this.props;
    return (
        <div>
        <ul id="list1" className="list-group-item">
                <a className="list-group" target="_blank" href={repo.html_url}>
                    {repo.name} :<bold id="des1"> {repo.description}</bold>
                </a>
        </ul>
        </div>
    );
  }
}

export default Repo;
