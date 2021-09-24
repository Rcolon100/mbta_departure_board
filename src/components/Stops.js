import React, { Component } from 'react';

export default class Stops extends Component {
  render() {
    return(
      <div 
        className='item'
        data-value={this.props.stop.name}
        onClick={this.props.onClick}
      >
        {this.props.stop.name}
      </div>
    )
  }
}