import React from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import FetchData from './service/FetchData'

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    links: {},
  };

  componentDidMount() {
    this.fetchData.getRocket()
    .then(data => {
      this.setState({ rockets: data.map(item => item.name) });
      return data;
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => this.setState({ rocketFeatures }));

    this.fetchData.getCompany()
    .then(data => this.setState({ links: data.links }));
  };

  updateRocket() {
    this.fetchData.getRocket()
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket);
  }

  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Features rocket={this.state.rocket} rocketFeatures={this.state.rocketFeatures} />
        <Footer links={this.state.links} />
      </>
    );  
  }
}

export default App;
