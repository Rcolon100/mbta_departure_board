import React, { Component } from 'react';

export default class Transit extends Component {
  render() {
    return(
      <div className='four wide column'>
        <button
          className='ui segment ui basic button ui active button'
          onClick={() => this.props.onClick(this.props.typeValue)}
        >
        {this.props.name}
        </button>
      </div>
    )
  }
}