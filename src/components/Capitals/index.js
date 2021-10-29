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

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  updateCountry = event => {
    this.setState({capitalId: event.target.value})
  }

  capitalIdFromOptions = () => {
    const {capitalId} = this.state
    const displayCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )
    return displayCountry.country
  }

  render() {
    const {capitalId} = this.state
    const displayCountry = this.capitalIdFromOptions(capitalId)
    console.log(displayCountry)
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="capitals-list-container">
            <select
              className="capital-select"
              onChange={this.updateCountry}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  className="option"
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="country-name">{displayCountry}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
