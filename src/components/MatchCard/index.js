// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchItem

  const classNameColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="mc-li">
      <img
        className="competing-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-title">{competingTeam}</p>
      <p className="result-para-title">{result}</p>
      <p className={`match-status-head ${classNameColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
