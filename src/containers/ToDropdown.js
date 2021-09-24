import React, { Component } from 'react';
import Stops from '../components/Stops';

export default class ToDropdown extends Component {
  render() {
      if (this.props.stops.length === 0) {
          return(<div/>)
      }

    // console.log('this.props.stops', this.props.stops)

    return(
      <div className='left floated six wide column'>
        <div className='ui compact menu'>
          <div className='ui simple dropdown item four wide column'>
            Select Stop
            <i className='dropdown icon center aligned' />
            <div className='menu'>
            {
              this.props.stops.map((stop) => (
                <Stops
                  key={stop.id} 
                  stop={stop.attributes}
                  stopId={stop.id}
                  onClick={() => this.props.onClick(stop.id, stop.attributes.name)}
                />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}