import React, { Component } from 'react';
import Departures from '../components/Departures';

export default class DepartureTable extends Component {

render() {

// console.log('inside DepartureTable:',this.props.arrivals.relationships.route.data.id)


    return(
       <div className='ui raised very padded text container ui equal grid center aligned sixteen wide column'>
          <div>
              <h3 
                className='ui huge header center aligned'
                style={{textDecoration:'underline', marginBottom: '0.5em'}}>
                  {!this.props.stopName ? 'Departure Board' : this.props.stopName}
              </h3>
          </div>
          <div>
            <table className='ui celled table ui inverted striped table tablet unstackable'>
              <thead className='center aligned'>
                <tr>
                    <th>Route</th>
                    <th>Time</th>
                    <th>Arrival Time</th>
                    <th>Direction</th>
                    {/* <th>Status</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  this.props.arrivals.filter((arr) => arr.attributes.arrival_time !== null)
                  .map((arr, index) => {
                    const routeId = arr.relationships.route.data.id;
                    const arrivalDir = arr.attributes.direction_id;
                    // const status = arr.attributes.status;
                    // console.log('status inside table', status)
                    // console.log('arr', index, 'routeId:', routeId)
                    // console.log('after clicking stop', arr.attributes)
                      return (
                        <Departures 
                          key={index} 
                          arrival={arr.attributes}
                          route={routeId}
                          dir={
                            this.props.directions[routeId]
                            ? this.props.directions[routeId][arrivalDir]
                            : '' 
                          }
                          // status={status} //displays commuter rail status
                        />
                      )
                    }
                  )
                }
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}
