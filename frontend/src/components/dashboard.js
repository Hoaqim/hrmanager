import React, { Component } from 'react'
import MenuBar from './MenuBar.js'

export default class dashboard extends Component {
  render() {
    return (
    <div id="Wrapper">
      <div className="MenuBar">
        <MenuBar></MenuBar>
      </div>

      <div id="LeftSide">
        Lista prac.
      </div>
      <div className="Overviews">
        <div className="overview-1">
          Overview1
        </div>
        <div className="overview-2">
          Overview2
        </div>
      </div>
    </div>
    )
  }
}