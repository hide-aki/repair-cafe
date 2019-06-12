import React, { Component } from 'react';
import SideBar from './component/Slide'

import './Landing.scss';

class Landing extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <header>
          <div class="bm-burger-button"></div>
          <nav>
            <ul className="menu">
              <li><a href="">首頁</a></li>
              <li><a href="">關於Repair Cafe</a></li>
              <li><a href="">近期活動</a></li>
              <li><a href="">社群參與</a></li>
              <li><a href="">聯絡我們</a></li>
            </ul>
          </nav>
        </header>
      </div >
    );
  }

}

export default Landing;
