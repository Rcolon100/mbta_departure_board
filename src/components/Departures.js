import React, { Component } from 'react';

export default class Departures extends Component {
    render() {

    //departure table arrival info
      
      const departureTime = new Date(this.props.arrival.arrival_time);
      const timeStr = departureTime.toLocaleTimeString([], {timeStyle: 'short'});
      const now = new Date();
      const arrivalTime = Math.ceil((departureTime - now) / 60000)

    return(
            <tr className='center aligned'> 
              <td >{this.props.route}</td>
              <td >{timeStr}</td>
              <td >{arrivalTime > 0 ? `${arrivalTime} mins` : 'Departed'}</td>
              <td >{this.props.dir}</td>
              {/* <td>{this.props.status}</td> */}
            </tr>
    )
  }
}