import React, {Component} from 'react';
import Transit from '../components/Transit';

export default class TransitOptions extends Component {
  render() {
    return (
      <div className='ui raised very padded text container ui equal grid center aligned sixteen wide column'>
        <Transit
          className=''
          name="Subways" 
          typeValue="0,1"
          onClick={this.props.onClick} 
        />
        <Transit
          className=''
          name="Commuter Rail"
          typeValue="2"
          onClick={this.props.onClick} 
        />
        <Transit
          className=''
          name="Bus" 
          typeValue="3"
          onClick={this.props.onClick} 
        />
        <Transit
          className=''
          name="Ferry" 
          typeValue="4"
          onClick={this.props.onClick} 
        />
      </div>
    )
  }
}