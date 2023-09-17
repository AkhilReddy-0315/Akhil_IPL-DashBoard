// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardList: updateData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="home-bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="home-con">
            <div className="dashBoard-head-con">
              <img
                className="ipl-logo-img"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
              />
              <h1 className="home-head">Ipl DashBoard</h1>
            </div>
            <ul className="Team-card-con">
              {teamCardList.map(eachItem => (
                <TeamCard key={eachItem.id} teamCardItem={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
