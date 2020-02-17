import React, { Component } from 'react';

class CountryDetail extends Component {
  
  
    findCountry = () => {
    // console.log(this.props.match.params.countryId);
    // console.log(typeof this.props.countries);
    let theCountry = this.props.countries.find(eachCountry => {
        return (eachCountry.cca3 === this.props.match.params.countryId)
    })
    this.findBorders(theCountry)
    return theCountry;
  };

  findBorders = (theCountry) => {
      console.log(this.props.match.params.countryId)
      console.log(theCountry.borders)
      let theBorder = theCountry.borders.map(border => {
          return <li>{border}</li>
      })
      return (theBorder)
  }


  render() {
      let theCountry = this.findCountry()
    return (
      <div>
        <h2>{theCountry.name.common}</h2>
        <hr />
        <b>Capital: </b> {theCountry.capital}
        <hr />
        <b>Area: </b> {theCountry.area} km2
        <hr />
        <b>Borders: </b>
        <ul>
          <li>{this.findBorders()}</li>
        </ul>
      </div>
    );
  }
}

export default CountryDetail;