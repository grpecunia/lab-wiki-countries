/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import CountryDetail from './CountryDetail'
import countries from './countries.json'
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  
  state = {
    countries
  }

  showCountryOptions = () => {
    // console.log(countries)
    let countryList = {...this.state.countries}
    // console.log(countryList[0].cca3)
    let list = [];
    for (let i in countryList) {
      // console.log(countryList[i].name);
      list.push(
        <Link
          key={i}
          className="list-group-item list-group-item-action"
          to={`/country/${countryList[i].cca3}`}
        >
          {countryList[i].flag} {countryList[i].name.common}
        </Link>
      );
    }
    return list
  }

render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container row">
          <div className="col-4">
            <div className="list-group">{this.showCountryOptions()}</div>
          </div>

          <div className="col-7 offset-1">
            <Switch>
              <Route
                exact
                path="/country/:countryId"
                render={props => (
                  <CountryDetail {...props} countries={this.state.countries} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  
  }

}

export default App;
