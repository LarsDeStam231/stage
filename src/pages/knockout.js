import React, {useState} from 'react';
import "./styles.css";
import "./Voorspel.js";
import {poules, matches} from './Data.js';

const Knockout = () => {

  const [voorspelling, setVoorspelling]= useState(JSON.parse(localStorage.getItem('voorspelling') || '[]'));
  const handleEditChange = (evt) => {
    const matchid = evt.target.id.split('_')[1];
    const voorsp = JSON.parse(JSON.stringify(voorspelling));
    var item = voorsp.find((thisitem) => thisitem.id == matchid);
    if (!item){
      item = {id: matchid, team1: 0, team2: 0}
      voorsp.push(item)
    }
//hier word gekeken of de wedstrijd al bestaat, en als dat niet het geval is moet die de item maken zoals aangegeven
    if (evt.target.id.match(/team1/))
      item.team1 = evt.target.value;
    else
      item.team2 = evt.target.value;
    setVoorspelling(voorsp);
    localStorage.setItem('voorspelling', JSON.stringify(voorsp))

      console.log(teamlist)

    }

    const teamlist= JSON.parse(localStorage.getItem('teamlist') || '[]');


  return(


    <div class="knockoutrondes">
    <h2>Knockoutfase!</h2>
      <div class="laatstezestien">
      {matches.filter(match => match.bracket == "L16").map((match) => {
        console.log(match)
        const teamone = teamlist.find(team => team.poule == match.poule1 && team.currentplacement == match.position1)
        const teamtwo = teamlist.find(team => team.poule == match.poule2 && team.currentplacement == match.position2)
        console.log(teamone, teamtwo)
        var item = voorspelling.find((thisitem) => thisitem.id == match.id) || {id: match.id, team1: null, team2: null}

        console.log(item)
        return(

      <table class="laatste16">
      <tr>
        <th>thuis</th>
        <th>uit</th>
        <th>tijd</th>
      </tr>
      <tr>
      <td><img className="photo" src={teamone.flag} /><label for="team1">{match.teamone}<br /></label>
          <input type="number" id={"team1_"+match.id} name="team1" onChange={handleEditChange} value={item.team1} /></td>
      <td><img className="photo" src={teamtwo.flag} /><label for="team2">{match.teamtwo}<br /></label>
          <input type="number" id={"team2_"+match.id} name="team2"  onChange={handleEditChange} value={item.team2} /></td>
        <td>{match.date}<br />{match.time}</td>
      </tr>
      </table>



    )})}
        </div>

        <div class="kwartfinales">
        {matches.filter(match => match.bracket == "Q").map((match) => {


        })}
        </div>

      </div>



  )

}




export default Knockout;
