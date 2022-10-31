import React from 'react';
import "./styles.css";
import {teamlist, poules } from "./Data.js"
//test git
const Teams = () => {
  return (
    <div class="container">
      <h1>Alle informatie</h1>
    <div class="poulelijst">
    {poules.filter(poule => poule.fase == 'poule').map((poule) => {
      return (
        <div class="vak">
          <h2>{poule.description}</h2>
          {teamlist.filter((team) => team.poule == poule.id ).map((team) => {
            return (<p class="team"><img className="photo" src={team.flag} /> {team.id}</p>)}
          )}
        </div>
      )
    })}
    </div>

      <div class="info">
        {poules.filter(poule => poule.fase == 'poule').map((poule)  => {
          return(
            <div class="record">
              <h2>{poule.description}</h2>
              {teamlist.filter((team) => team.poule == poule.id ).map((team) => {
              return (<p class="land"><img className="photo" src={team.flag} /> de aanvoerder van {team.description} is {team.captain}. {team.description} staat op plek {team.ranking} op de wereldranglijst. In het vorige toernooi eindigde {team.description} in {team.lastplacement}. Het hoogste wat {team.description} heeft gehaald is {team.highestplacement}.</p>)}
            )}
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Teams;
