import React, {useState} from 'react';
import "./styles.css";
//import "./Voorspel.js";
import {poules, matches} from './Data.js';

const Knockout = () => {

  const [matches, setMatches]= useState(JSON.parse(localStorage.getItem('matches') || '[]'));
  const handleEditChange = (evt) => {
    const matchid = evt.target.id.split('_')[1];
    const matches = JSON.parse(localStorage.getItem('matches') || '[]');
    //const voorsp = JSON.parse(JSON.stringify(voorspelling));
    var item = matches.find((thisitem) => thisitem.id == matchid);

    if (evt.target.id.match(/team1/))
      item.score1 = evt.target.value;
    else
      item.score2 = evt.target.value;
    setMatches(matches);
    localStorage.setItem('matches', JSON.stringify(matches))


    }

    const teamlist= JSON.parse(localStorage.getItem('teamlist') || '[]');
    //const matches = JSON.parse(localStorage.getItem('matches') || '[]');


  return(


    <div class="knockoutrondes">
    <h2>Knockoutfase!</h2>
      <div class="laatstezestien">
      {matches.filter(match => match.bracket == "L16").map((match) => {
        const teamone = teamlist.find(team => team.poule == match.poule1 && team.currentplacement == match.position1)
        const teamtwo = teamlist.find(team => team.poule == match.poule2 && team.currentplacement == match.position2)
        match.team1 = teamone;
        match.team2 = teamtwo;
        //gebruik maken van sort()??

        //gebruik maken van een state??

    //  console.log(match)
        return(

      <table class="laatste16">
      <tr>
        <th>thuis</th>
        <th>uit</th>
        <th>tijd</th>
      </tr>
      <tr>
      <td><img className="photo" src={teamone.flag} /><label for="team1">{match.teamone}<br /></label>
          <input type="number" id={"team1_"+match.id} min="0" name="team1" onChange={handleEditChange} value={match.score1} /></td>
      <td><img className="photo" src={teamtwo.flag} /><label for="team2">{match.teamtwo}<br /></label>
          <input type="number" id={"team2_"+match.id} min="0" name="team2"  onChange={handleEditChange} value={match.score2} /></td>
        <td>{match.date}<br />{match.time}</td>
      </tr>
      </table>

    )})}
        </div>

      <div class="kwartfinales">
        {matches.filter(match => match.bracket == "Q").map((qmatch) => {
          const match1 = matches.find(obj => obj.id == qmatch.winner1);
          const team1 = (match1.score1 > match1.score2) ? match1.team1 : match1.team2;

            const match2 = matches.find(obj => obj.id == qmatch.winner2);
            const team2 = (match2.score1 > match2.score2) ? match2.team1 : match2.team2;

            qmatch.team1 = team1;
            qmatch.team2 = team2;


      console.log(team1, team2)

      console.log(qmatch)
      return(

    <table class="kwartfinale">
    <tr>
      <th>thuis</th>
      <th>uit</th>
      <th>tijd</th>
    </tr>
    <tr>
    <td><img className="photo" src={team1.flag} /><label for="team1">{qmatch.teamone}<br /></label>
        <input type="number" id={"team1_"+qmatch.id} min="0" name="team1" onChange={handleEditChange} value={qmatch.score1} /></td>
    <td><img className="photo" src={team2.flag} /><label for="team2">{qmatch.teamtwo}<br /></label>
        <input type="number" id={"team2_"+qmatch.id} min="0" name="team2"  onChange={handleEditChange} value={qmatch.score2} /></td>
      <td>{qmatch.date}<br />{qmatch.time}</td>
    </tr>
    </table>


      )})}

      </div>

      <div class="halvefinales">

      {matches.filter(match => match.bracket == "S").map((smatch) => {
        const match1 = matches.find(obj => obj.id == smatch.winner1);
        const team1 = (match1.score1 > match1.score2) ? match1.team1 : match1.team2;

          const match2 = matches.find(obj => obj.id == smatch.winner2);
          const team2 = (match2.score1 > match2.score2) ? match2.team1 : match2.team2;

          smatch.team1 = team1;
          smatch.team2 = team2;

          return(

        <table class="halvefinale">
        <tr>
          <th>thuis</th>
          <th>uit</th>
          <th>tijd</th>
        </tr>
        <tr>
        <td><img className="photo" src={team1.flag} /><label for="team1">{smatch.teamone}<br /></label>
            <input type="number" id={"team1_"+smatch.id} min="0" name="team1" onChange={handleEditChange} value={smatch.score1} /></td>
        <td><img className="photo" src={team2.flag} /><label for="team2">{smatch.teamtwo}<br /></label>
            <input type="number" id={"team2_"+smatch.id} min="0" name="team2"  onChange={handleEditChange} value={smatch.score2} /></td>
          <td>{smatch.date}<br />{smatch.time}</td>
        </tr>
        </table>


          )})}


      </div>

      <div class="finalerondes">
      {matches.filter(match => match.bracket == "Fi").map((fmatch) => {
        const match1 = matches.find(obj => obj.id == fmatch.winner1);
        const team1 = (match1.score1 > match1.score2) ? match1.team1 : match1.team2;

          const match2 = matches.find(obj => obj.id == fmatch.winner2);
          const team2 = (match2.score1 > match2.score2) ? match2.team1 : match2.team2;

          fmatch.team1 = team1;
          fmatch.team2 = team2;

          return(

        <table class="grotefinale">
        <tr>
          <th>thuis</th>
          <th>uit</th>
          <th>tijd</th>
        </tr>
        <tr>
        <td><img className="photo" src={team1.flag} /><label for="team1">{fmatch.teamone}<br /></label>
            <input type="number" id={"team1_"+fmatch.id} min="0" name="team1" onChange={handleEditChange} value={fmatch.score1} /></td>
        <td><img className="photo" src={team2.flag} /><label for="team2">{fmatch.teamtwo}<br /></label>
            <input type="number" id={"team2_"+fmatch.id} min="0" name="team2"  onChange={handleEditChange} value={fmatch.score2} /></td>
          <td>{fmatch.date}<br />{fmatch.time}</td>
        </tr>
        </table>


          )})}
      </div>

      </div>
  )



}




export default Knockout;
