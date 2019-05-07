import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Memes from './memes/memes';
import mockImages from '../utils/mockimages';

class Home extends Component {
  render() {
    return (
    <div className="home">
      <Navbar/>
      <Sidebar/>
      <div className="photos">
        <Memes images={mockImages}/>
      </div>
      <a href="https://twitter.com/nj3ry"><h4>@nj3ry</h4></a>
    </div>
    );
  }
}

export default Home;
