import React, { Component } from 'react';
import Routes from '../components/Routes';

export default class FromDropdown extends Component {
  render() {

    if (this.props.routes.length === 0) {
      return (<div/>)
    }

    return(
      <div className='left floated six wide column'>
        <div className='ui compact menu'>
          <div className='ui simple dropdown segment item four wide column lineColor'>
            Select Line
            <i className='dropdown icon center aligned' />
            <div className='menu'>
            {
              this.props.routes.map((route) => (
                <Routes key={route.id} 
                  route={route.attributes}
                  routeId={route.id}
                  onClick={() => this.props.onClick(route.id)} 
                />
              )    
              )
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}