// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardItem} = props
  const {name, id, teamImageUrl} = teamCardItem

  return (
    <Link className="teamCard-link" to={`/team-matches/${id}`}>
      <li className="teamCard-list-con">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
