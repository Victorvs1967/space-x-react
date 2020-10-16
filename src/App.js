import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/Home/Home';
import Features from './components/features/Features';
import Calendar from './components/calendar/Calendar';
import Footer from './components/footer/Footer';
import Details from './components/details/Details';
import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: '',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  };

  updateRocket() {
    this.fetchData.getRocket()
    .then(data => {
      this.setState({ rockets: data.map(item => item.name) });
      return data;
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => this.setState({ rocketFeatures }));
  }

  updateCompany = () => {
    this.fetchData.getCompany()
    .then(company => this.setState({ company }));
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket);
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.rockets && <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />}

        <Route exact path='/'>
          {this.state.company && <Home company={this.state.company} />}
        </Route>

        <Route path='/calendar' component={Calendar} />

        <Route path='/rocket'>
          {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        </Route>

        <Route path='/details/:id' component={Details} />

        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    );  
  }
}

export default App;
