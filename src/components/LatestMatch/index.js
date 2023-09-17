// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchItem

  return (
    <div className="latest-match-con">
      <div className="lm-con1">
        <h1 className="first-innings-head">{firstInnings}</h1>
        <p className="date-para">{date}</p>
        <p className="lm-para1">{venue}</p>
        <p className="lm-para1">{result}</p>
      </div>
      <img
        className="competing-team-logo-img"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="lm-con2">
        <h1 className="lm-head">First Innings</h1>
        <p className="lm-para">{firstInnings}</p>
        <h1 className="lm-head">Second Innings</h1>
        <p className="lm-para">{secondInnings}</p>
        <h1 className="lm-head">Man Of The Match</h1>
        <p className="lm-para">{manOfTheMatch}</p>
        <p className="lm-head">umpires</p>
        <p className="lm-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
