import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  
  
    findCountry = () => {
    // console.log(this.props.match.params.countryId);
    // console.log(typeof this.props.countries);
    let theCountry = this.props.countries.find(eachCountry => {
        return (eachCountry.cca3 === this.props.match.params.countryId)
    })
    return theCountry;
  };

  findBorders = (theCountry) => {
      // console.log(this.props.match.params.countryId, this.props.countries)
      let theBorders = theCountry.borders;
      let arr = [];
      for (let i = 0; i < theBorders.length; i++) {
        let fullCountry = this.props.countries.find(eachCountry => {
            if (theBorders <= 0) {
              arr.push(<li>No borders for this country</li>);
            }

          return theBorders[i] === eachCountry.cca3})

          arr.push(
            <li>
              <Link key={i} to={`/country/${fullCountry.cca3}`}>
                {fullCountry.flag} {fullCountry.name.common}
              </Link>
            </li>
          );
          
      }

      return arr;
  }


  render() {
      let theCountry = this.findCountry()
      // let theBorders = this.findBorders()
    return (
      <div>
        <h2>{theCountry.name.common}</h2>
        <hr />
        <b>Capital: </b>
        {theCountry.capital}
        <hr />
        <b>Area: </b>
        {theCountry.area} km2
        <hr />
        <b>Borders: </b>
        <ul>{this.findBorders(theCountry)}</ul>
        <hr />
        <b>Region: </b> {theCountry.region} <br/>
        <b>Sub-Region:</b> {theCountry.subregion}
      </div>
    );
  }
}

export default CountryDetail;