import React, { Component } from 'react';
import moment from 'moment';

export default class Time extends Component{

  render() {
    return (
      <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    )
  }
}