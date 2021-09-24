import React, {Component} from 'react';
import TransitOptions from '../containers/TransitOptions';
import FromDropdown from '../containers/FromDropdown';
import ToDropdown from '../containers/ToDropdown';
import DepartureTable from '../containers/DepartureTable';
import Time from '../components/Time';


function fetchData(endpoint) {
    const URL = `https://api-v3.mbta.com/${endpoint}`
    return fetch(URL)
            .then((resp) => resp.json())
            .then((data) => data.data)
            .catch((err) => console.log(err));
}

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    date: new Date(),
    transit: null,
    routes: [],
    stops: [],
    routeId: null,
    stopId: null,
    stopName: null,
    // status: null,
    arrivals: []
  }

  this.getRoutes = this.getRoutes.bind(this);
  this.getStops = this.getStops.bind(this);
  // this.getStatus = this.getStatus.bind(this);
  this.getArrivals = this.getArrivals.bind(this);
  this.handleTransitClick = this.handleTransitClick.bind(this);
  this.handleRouteClick = this.handleRouteClick.bind(this);
  this.handleStopClick = this.handleStopClick.bind(this);
}

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  fetchData('routes')
      .then((routes) => {
          var directions = {};
          routes.forEach((route) => {
              directions[route.id] = route.attributes.direction_names;
          });
          this.setState({
              directions: directions
          });
      })
}

componentWillUnmount() {
  if(this.timerID < 1) clearInterval(this.timerID);
}

tick() {
  this.setState({
    date: new Date()
  });
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.transit !== this.state.transit) this.getRoutes();
  else if (prevState.routeId !== this.state.routeId) this.getStops();
  else if (prevState.stopId !== this.state.stopId) this.getArrivals();
}

getRoutes() {
  const typeVal = this.state.transit;
  fetchData(`routes?filter[type]=${typeVal}`)
    .then((routes) => {
        this.setState({
            routes: routes
        });
    });
}

getStops() {
  const routeId = this.state.routeId;
  const endpoint = `stops?filter[route]=${routeId}`;
  fetchData(endpoint)
    .then((stops) => {
      this.setState({
        stops: stops
      });
    });
}

// getStatus() {
//   const routeId = this.state.routeId;
//   const stopId = this.state.stopId;
//   const endpoint = `predictions?filter[stop]=${stopId}&filter[route_type]=${routeId}`
//   fetchData(endpoint)
//     .then((status) => {
//       this.setState({
//         status: status
//     });
//   });
// }

getArrivals() {
  const stopId = this.state.stopId;
  const endpoint = `predictions?filter[stop]=${stopId}`;
  fetchData(endpoint)
      .then((arrivals) => {
          this.setState({
              arrivals: arrivals
          });
      });
}

handleTransitClick(typeVal) {
  this.setState({
      transit: typeVal,
      stops: [],
      stopId: null,
      arrivals: []
  });
}

handleRouteClick(routeId) {
  this.setState({
      routeId: routeId,
      stopId: null,
      arrivals: [],
  });
}

handleStopClick(stopId, stopName) {
  this.setState({
      stopId: stopId,
      stopName: stopName
  });
}


  render() {
    return (
      <div className='ui grid center aligned container segment'>
        <div className='ui raised very padded text ui equal grid center aligned sixteen wide column'>
          <h1 style={{fontSize: '3rem'}}>MBTA</h1>
          <Time/>
        </div>
        <TransitOptions 
          onClick={this.handleTransitClick}
        />
        <div className='ui raised very padded text ui equal grid center aligned sixteen wide column'>
          <FromDropdown
              routes={this.state.routes}
              onClick={this.handleRouteClick}
          />
          <ToDropdown
              stops={this.state.stops}
              onClick={this.handleStopClick}
              // onChange={}
          />
        </div>
        <DepartureTable 
            stopName={this.state.stopName}
            arrivals={this.state.arrivals}
            directions={this.state.directions}
            // status={this.state.status}     
        />
      </div>
    )
  }
}

export default App;