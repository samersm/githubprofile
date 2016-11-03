import React, { Component } from 'react';


class Repo extends Component {

  render() {
      const {repo} = this.props;
    return (
        <div>
        <ul className="list-group-item">
                <a className="list-group" href={repo.html_url}>
                    {repo.name} : {repo.description}
                </a>
        </ul>
        </div>
    );
  }
}

export default Repo;
