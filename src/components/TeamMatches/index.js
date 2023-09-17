// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: '', matchDetails: '', recentMatches: '', isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updateTBR = {teamBannerUrl: data.team_banner_url}

    const updateLMD = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    console.log(updateLMD)

    const dataBeforeConverting = data.recent_matches

    const updateRm = dataBeforeConverting.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      id: eachItem.id,
      result: eachItem.result,
      matchStatus: eachItem.match_status,
      competingTeamLogo: eachItem.competing_team_logo,
    }))

    console.log(updateRm)

    this.setState({
      teamBanner: updateTBR.teamBannerUrl,
      matchDetails: updateLMD,
      recentMatches: updateRm,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, matchDetails, recentMatches, isLoading} = this.state

    const matter = [...recentMatches]

    return (
      <div className="team-matches-con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <img
              className="team-banner-img"
              src={teamBanner}
              alt="team banner"
            />
            <p className="lm-title-para">Latest Matches</p>
            <LatestMatch key={matchDetails.id} latestMatchItem={matchDetails} />
            <ul className="recent-match-ul">
              {matter.map(eachItem => (
                <MatchCard key={eachItem.id} recentMatchItem={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
