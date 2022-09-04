import React from 'react'
import './Team.css'
import Back from '../Common/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
          <Back title="Meet The Team"/>
          <section className="team padding">
            <div className="container grid">
                <TeamCard />
            </div>
          </section>
    
    </>
  )
}

export default Team