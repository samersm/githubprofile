import React, { Component } from 'react';


class Repo extends Component {

  render() {
      const {repo} = this.props;
    return (
        <div>
<<<<<<< HEAD
        <ul id="list1" className="list-group-item">
=======
        <ul className="list-group-item">
>>>>>>> 03bf968e605ed74e1bd19affccc9357cc5f2f175
                <a className="list-group" href={repo.html_url}>
                    {repo.name} : {repo.description}
                </a>
        </ul>
        </div>
    );
  }
}

export default Repo;
