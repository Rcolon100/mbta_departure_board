import React, { Component } from 'react';

export default class Routes extends Component {
  render() {

        const routeDesc = this.props.route.description;
        const name = (
          routeDesc.includes("Bus") || routeDesc.includes("Limited")
          ) ? this.props.route.short_name : this.props.route.long_name;
        // console.log('dropdown names:', name)
    return(

      <div
        className='item'
        onClick={this.props.onClick}
      >
        {name}
      </div>
    )
  }
}