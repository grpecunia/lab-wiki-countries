import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  findCountry = () => {
    // console.log(this.props.match.params.countryId);
    // console.log(typeof this.props.countries);
    let theCountry = this.props.countries.find(eachCountry => {
      return eachCountry.cca3 === this.props.match.params.countryId;
    });
    return theCountry;
  };

  findBorders = theCountry => {
    // console.log(this.props.match.params.countryId, this.props.countries)
    let theBorders = theCountry.borders;
    let arr = [];
    for (let i = 0; i < theBorders.length; i++) {
      let fullCountry = this.props.countries.find(eachCountry => {
        return theBorders[i] === eachCountry.cca3;
      });
      arr.push(
        <li>
          <Link key={i} to={`/country/${fullCountry.cca3}`}>
            {fullCountry.flag} {fullCountry.name.common}
          </Link>
        </li>
      );
    }

    return arr;
  };


  render() {
    let theCountry = this.findCountry();
    // let theBorders = this.findBorders()
    return (
      <div>
        <h2>{theCountry.flag} {theCountry.name.common}</h2>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>
                <b>Official Name: </b>
              </td>
              <td>{theCountry.name.official}</td>
              <td>
                <b>Capital: </b>
              </td>
              <td>{theCountry.capital}</td>
            </tr>
            <tr>
              
                <td>
                  <b>Area: </b>
                </td>
                <td>{theCountry.area} km2</td>
              <td>
                <b>Borders: </b>
              </td>
              <td>
                <ul>{this.findBorders(theCountry)}</ul>
              </td>

            </tr>
            <tr>
              <td>
                <b>Region: </b>
              </td>
              <td>{theCountry.region}</td>
              <td>
                <b>Sub-Region:</b>
              </td>
              <td>{theCountry.subregion}</td>
            </tr>
            <tr>
              <td>
                <b>Currency:</b>
              </td>
              <td>{theCountry.currency}</td>
              <td>
                <b>TLD:</b>
              </td>
              <td>https://example{theCountry.tld}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;