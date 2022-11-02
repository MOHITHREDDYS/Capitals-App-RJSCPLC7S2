import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryAndCapital: countryAndCapitalsList[0]}

  onChangingCapital = event => {
    const changeCountryAndCapital = countryAndCapitalsList.filter(
      country => country.id === event.target.value,
    )
    this.setState({countryAndCapital: changeCountryAndCapital[0]})
  }

  render() {
    const {countryAndCapital} = this.state
    const {country} = countryAndCapital
    return (
      <div className="main_container">
        <div className="container">
          <h1>Countries And Capitals</h1>
          <select onChange={this.onChangingCapital}>
            {countryAndCapitalsList.map(capital => (
              <option value={capital.id} key={capital.id}>
                {capital.capitalDisplayText}
              </option>
            ))}
          </select>
          <span>is capital of which country?</span>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
