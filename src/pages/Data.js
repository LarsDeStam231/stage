const poules = [
  {id: 'A', description: 'Poule A', fase: 'poule'},
  {id: 'B', description: 'Poule B', fase: 'poule'},
  {id: 'C', description: 'Poule C', fase: 'poule'},
  {id: 'D', description: 'Poule D', fase: 'poule'},
  {id: 'E', description: 'Poule E', fase: 'poule'},
  {id: 'F', description: 'Poule F', fase: 'poule'},
  {id: 'G', description: 'Poule G', fase: 'poule'},
  {id: 'H', description: 'Poule H', fase: 'poule'},
  {id: 'L16', description: 'laatste 16', fase: 'knockout'},
  {id: 'Q', description: 'kwartfinales', fase: 'knockout'},
  {id: 'S', description: 'halve finales', fase: 'knockout'},
  {id: 'LF', description: 'troostfinale', fase: 'knockout'},
  {id: 'Fi', description: 'finale', fase: 'knockout'}

]
;

const teamlist = [
  {id: 'NED', description: 'Nederland', flag: "logos/NED.png", poule: 'A', captain: 'Virgil van Dijk', ranking: '10', lastplacement:'de qualificatie', highestplacement: 'plek 2', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'ECU', description: 'Ecuador', flag: "logos/ECU.png", poule: 'A', captain: 'Enner Valencia', ranking: '46', lastplacement:'de qualificatie', highestplacement: 'plek 2', currentplacement: 0, points: 0, played: 0, played: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'SEN', description: 'Senegal', flag: "logos/SEN.png", poule: 'A', captain: 'Kalidou Koulibaly', ranking: '20', lastplacement:'de groepsfase', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'QAT', description: 'Qatar', flag: "logos/QAT.png", poule: 'A', captain: 'Hassan Al-Haydos', ranking: '51', lastplacement:'de qualificatie', highestplacement: 'de qualificatie', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'ENG', description: 'Engeland', flag: "logos/ENG.png", poule: 'B', captain: 'Harry Kane', ranking: '5', lastplacement:'plek 4', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'IRN', description: 'Iran', flag: "logos/IRN.png", poule: 'B', captain: 'Ehsan Hajsafi', ranking: '21', lastplacement:'de groepsfase', highestplacement: 'de groepsfase', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'USA', description: 'de Verenigde Staten', flag: "logos/USA.png", poule: 'B', captain: 'Tyler Adams', ranking: '15', lastplacement:'de qualificatie', highestplacement: 'plek 3', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'WAL', description: 'Wales', flag: "logos/WAL.png", poule: 'B', captain: 'Gareth Bale', ranking: '18', lastplacement:'de qualificatie', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'ARG', description: 'Argentinië', flag: "logos/ARG.png", poule: 'C', captain: 'Lionel Messi', ranking: '4', lastplacement:'de laatste 16', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'SAU', description: 'Saudi-Arabië', flag: "logos/SAU.png", poule: 'C', captain: 'Salman Al-Faraj', ranking: '49', lastplacement:'de groepsfase', highestplacement: 'de laatste 16', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'MEX', description: 'Mexico', flag: "logos/MEX.jpg", poule: 'C', captain: 'Andrés Guardado', ranking: '9', lastplacement:'de laatste 16', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'POL', description: 'Polen', flag: "logos/POL.png", poule: 'C', captain: 'Robert Lewandowski', ranking: '26', lastplacement:'de groepsfase', highestplacement: 'plek 3', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'FRA', description: 'Frankrijk', flag: "logos/FRA.png", poule: 'D', captain: 'Hugo Lloris', ranking: '3', lastplacement:'plek 1', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'AUS', description: 'Australië', flag: "logos/AUS.png", poule: 'D', captain: 'Matthew Ryan', ranking: '42', lastplacement:'de groepsfase', highestplacement: 'de laatste 16', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'DEN', description: 'Denemarken', flag: "logos/DEN.png", poule: 'D', captain: 'Simon Kjear', ranking: '11', lastplacement:'de laatste 16', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'TUN', description: 'Tunesië', flag: "logos/TUN.png", poule: 'D', captain: 'Youssef Msakni', ranking: '35', lastplacement:'de groepsfase', highestplacement: 'de groepsfase', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'ESP', description: 'Spanje', flag: "logos/ESP.png", poule: 'E', captain: 'Sergio Busquets', ranking: '7', lastplacement:'de laatste 16', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'CRC', description: 'Costa Rica', flag: "logos/CRC.png", poule: 'E', captain: 'Bryan Ruiz', ranking: '31', lastplacement:'de groepsfase', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'GER', description: 'Duitsland', flag: "logos/GER.png", poule: 'E', captain: 'Manuel Neuer', ranking: '12', lastplacement:'de groepsfase', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'JAP', description: 'Japan', flag: "logos/JAP.png", poule: 'E', captain: 'Maya Yoshida', ranking: '23', lastplacement:'de laatste 16', highestplacement: 'de laatste 16', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'BEL', description: 'België', flag: "logos/BEL.png", poule: 'F', captain: 'Eden Hazard', ranking: '2', lastplacement:'plek 3', highestplacement: 'plek 3', points: 0, currentplacement: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'CAN', description: 'Canada', flag: "logos/CAN.png", poule: 'F', captain: 'Atiba Hutchinson', ranking: '38', lastplacement:'de qualificatie', highestplacement: 'de groepsfase', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'MAR', description: 'Marokko', flag: "logos/MAR.png", poule: 'F', captain: 'Romain Saïss', ranking: '24', lastplacement:'de groepsfase', highestplacement: 'de laatste 16', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'CRO', description: 'Kroatië', flag: "logos/CRO.png", poule: 'F', captain: 'Luka Modric', ranking: '16', lastplacement:'plek 2', highestplacement: 'plek 2', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'BRA', description: 'Brazilië', flag: "logos/BRA.png", poule: 'G', captain: 'Casemiro', ranking: '1', lastplacement:'de kwartfinale', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'SER', description: 'Servië', flag: "logos/SER.png", poule: 'G', captain: 'Dusan Tadic', ranking: '25', lastplacement:'de groepsfase', highestplacement: 'plek 4', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'SUI', description: 'Zwitserland', flag: "logos/SUI.png", poule: 'G', captain: 'Granit Xhaka', ranking: '14', lastplacement:'laatste 16', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'CMR', description: 'Kameroen', flag: "logos/CMR.png", poule: 'G', captain: 'Vincent Aboubakar', ranking: '37', lastplacement:'de qualificatie', highestplacement: 'de kwartfinale', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

  {id: 'POR', description: 'Portugal', flag: "logos/POR.png", poule: 'H', captain: 'Cristiano Ronaldo', ranking: '8', lastplacement:'de laatste 16', highestplacement: 'plek 3', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'GHA', description: 'Ghana', flag: "logos/GHA.png", poule: 'H', captain: 'André Ayew', ranking: '60', lastplacement:'de qualificatie', highestplacement: 'plek 5', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'URU', description: 'Uruguay', flag: "logos/URU.png", poule: 'H', captain: 'Diego Godin', ranking: '13', lastplacement:'de kwartfinale', highestplacement: 'plek 1', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},
  {id: 'KOR', description: 'Zuid-Korea', flag: "logos/KOR.png", poule: 'H', captain: 'Heung-min Son', ranking: '29', lastplacement:'de groepsfase', highestplacement: 'plek 4', currentplacement: 0, points: 0, played: 0, wins: 0, losses: 0, draws:0, scored: 0, conceded: 0, gd: 0},

]
;

const matches = [
{id: '1', stage:'groupstage', bracket: 'A', teamone:'QAT', teamtwo:'ECU', date:'20-11-2022', time:'17:00'},
{id: '2', stage:'groupstage', bracket: 'A', teamone:'SEN', teamtwo:'NED', date:'21-11-2022', time:'17:00'},
{id: '3', stage:'groupstage', bracket: 'A', teamone:'QAT', teamtwo:'SEN', date:'25-11-2022', time:'14:00'},
{id: '4', stage:'groupstage', bracket: 'A', teamone:'NED', teamtwo:'ECU', date:'25-11-2022', time:'17:00'},
{id: '5', stage:'groupstage', bracket: 'A', teamone:'ECU', teamtwo:'SEN', date:'29-11-2022', time:'16:00'},
{id: '6', stage:'groupstage', bracket: 'A', teamone:'NED', teamtwo:'QAT', date:'29-11-2022', time:'16:00'},

{id: '7', stage:'groupstage', bracket: 'B', teamone: 'ENG', teamtwo: 'IRN', date: '21-11-2022', time:'14:00'},
{id: '8', stage:'groupstage', bracket: 'B', teamone: 'USA', teamtwo: 'WAL', date: '21-11-2022', time:'20:00'},
{id: '9', stage:'groupstage', bracket: 'B', teamone: 'WAL', teamtwo: 'IRN', date: '25-11-2022', time:'11:00'},
{id: '10', stage:'groupstage', bracket: 'B', teamone: 'ENG', teamtwo: 'USA', date: '25-11-2022', time:'20:00'},
{id: '11', stage:'groupstage', bracket: 'B', teamone: 'WAL', teamtwo: 'ENG', date: '29-11-2022', time:'20:00'},
{id: '12', stage:'groupstage', bracket: 'B', teamone: 'IRN', teamtwo: 'USA', date: '29-11-2022', time:'20:00'},

{id: '13', stage:'groupstage', bracket: 'C', teamone: 'ARG', teamtwo: 'SAU', date: '22-11-2022', time:'11:00'},
{id: '14', stage:'groupstage', bracket: 'C', teamone: 'MEX', teamtwo: 'POL', date: '22-11-2022', time:'17:00'},
{id: '15', stage:'groupstage', bracket: 'C', teamone: 'POL', teamtwo: 'SAU', date: '26-11-2022', time:'14:00'},
{id: '16', stage:'groupstage', bracket: 'C', teamone: 'ARG', teamtwo: 'MEX', date: '26-11-2022', time:'20:00'},
{id: '17', stage:'groupstage', bracket: 'C', teamone: 'POL', teamtwo: 'ARG', date: '30-11-2022', time:'20:00'},
{id: '18', stage:'groupstage', bracket: 'C', teamone: 'SAU', teamtwo: 'MEX', date: '30-11-2022', time:'20:00'},

{id: '19', stage:'groupstage', bracket: 'D', teamone: 'DEN', teamtwo: 'TUN', date: '22-11-2022', time:'14:00'},
{id: '20', stage:'groupstage', bracket: 'D', teamone: 'FRA', teamtwo: 'AUS', date: '22-11-2022', time:'20:00'},
{id: '21', stage:'groupstage', bracket: 'D', teamone: 'TUN', teamtwo: 'AUS', date: '26-11-2022', time:'11:00'},
{id: '22', stage:'groupstage', bracket: 'D', teamone: 'FRA', teamtwo: 'DEN', date: '26-11-2022', time:'17:00'},
{id: '23', stage:'groupstage', bracket: 'D', teamone: 'AUS', teamtwo: 'DEN', date: '30-11-2022', time:'16:00'},
{id: '24', stage:'groupstage', bracket: 'D', teamone: 'TUN', teamtwo: 'FRA', date: '30-11-2022', time:'16:00'},

{id: '25', stage:'groupstage', bracket: 'E', teamone: 'GER', teamtwo: 'JAP', date: '23-11-2022', time:'14:00'},
{id: '26', stage:'groupstage', bracket: 'E', teamone: 'ESP', teamtwo: 'CRC', date: '23-11-2022', time:'17:00'},
{id: '27', stage:'groupstage', bracket: 'E', teamone: 'JAP', teamtwo: 'CRC', date: '27-11-2022', time:'11:00'},
{id: '28', stage:'groupstage', bracket: 'E', teamone: 'ESP', teamtwo: 'GER', date: '27-11-2022', time:'20:00'},
{id: '29', stage:'groupstage', bracket: 'E', teamone: 'JAP', teamtwo: 'ESP', date: '01-12-2022', time:'20:00'},
{id: '30', stage:'groupstage', bracket: 'E', teamone: 'CRC', teamtwo: 'GER', date: '01-12-2022', time:'20:00'},

{id: '31', stage:'groupstage', bracket: 'F', teamone: 'MAR', teamtwo: 'CRO', date: '23-11-2022', time:'11:00'},
{id: '32', stage:'groupstage', bracket: 'F', teamone: 'BEL', teamtwo: 'CAN', date: '23-11-2022', time:'20:00'},
{id: '33', stage:'groupstage', bracket: 'F', teamone: 'BEL', teamtwo: 'MAR', date: '27-11-2022', time:'14:00'},
{id: '34', stage:'groupstage', bracket: 'F', teamone: 'CRO', teamtwo: 'CAN', date: '27-11-2022', time:'17:00'},
{id: '35', stage:'groupstage', bracket: 'F', teamone: 'CRO', teamtwo: 'BEL', date: '01-12-2022', time:'16:00'},
{id: '36', stage:'groupstage', bracket: 'F', teamone: 'CAN', teamtwo: 'MAR', date: '01-12-2022', time:'16:00'},

{id: '37', stage:'groupstage', bracket: 'G', teamone: 'SUI', teamtwo: 'CMR', date: '24-11-2022', time:'11:00'},
{id: '38', stage:'groupstage', bracket: 'G', teamone: 'BRA', teamtwo: 'SER', date: '24-11-2022', time:'20:00'},
{id: '39', stage:'groupstage', bracket: 'G', teamone: 'CMR', teamtwo: 'SER', date: '28-11-2022', time:'11:00'},
{id: '40', stage:'groupstage', bracket: 'G', teamone: 'BRA', teamtwo: 'SUI', date: '28-11-2022', time:'16:00'},
{id: '41', stage:'groupstage', bracket: 'G', teamone: 'SER', teamtwo: 'SUI', date: '02-12-2022', time:'20:00'},
{id: '42', stage:'groupstage', bracket: 'G', teamone: 'CMR', teamtwo: 'BRA', date: '02-12-2022', time:'20:00'},

{id: '43', stage:'groupstage', bracket: 'H', teamone: 'URU', teamtwo: 'KOR', date: '24-11-2022', time:'14:00'},
{id: '44', stage:'groupstage', bracket: 'H', teamone: 'POR', teamtwo: 'GHA', date: '24-11-2022', time:'17:00'},
{id: '45', stage:'groupstage', bracket: 'H', teamone: 'KOR', teamtwo: 'GHA', date: '28-11-2022', time:'14:00'},
{id: '46', stage:'groupstage', bracket: 'H', teamone: 'POR', teamtwo: 'URU', date: '28-11-2022', time:'20:00'},
{id: '47', stage:'groupstage', bracket: 'H', teamone: 'GHA', teamtwo: 'URU', date: '02-12-2022', time:'16:00'},
{id: '48', stage:'groupstage', bracket: 'H', teamone: 'KOR', teamtwo: 'POR', date: '02-12-2022', time:'16:00'},

{id: '49', stage:'knockoutstage', bracket: 'L16', poule1: "A", position1: 1, teamone: '', score1: 0, poule2: "B", position2: 2, teamtwo: '', score2: 0, date: '03-12-2022', time:'16:00'},
{id: '50', stage:'knockoutstage', bracket: 'L16', poule1: "C", position1: 1, teamone: '', score1: 0, poule2: "D", position2: 2, teamtwo: '', score2: 0, date: '03-12-2022', time:'20:00'},
{id: '51', stage:'knockoutstage', bracket: 'L16', poule1: "E", position1: 1, teamone: '', score1: 0, poule2: "F", position2: 2, teamtwo: '', score2: 0, date: '05-12-2022', time:'16:00'},
{id: '52', stage:'knockoutstage', bracket: 'L16', poule1: "G", position1: 1, teamone: '', score1: 0, poule2: "H", position2: 2, teamtwo: '', score2: 0, date: '05-12-2022', time:'20:00'},
{id: '53', stage:'knockoutstage', bracket: 'L16', poule1: "D", position1: 1, teamone: '', score1: 0, poule2: "C", position2: 2, teamtwo: '', score2: 0, date: '04-12-2022', time:'16:00'},
{id: '54', stage:'knockoutstage', bracket: 'L16', poule1: "B", position1: 1, teamone: '', score1: 0, poule2: "A", position2: 2, teamtwo: '', score2: 0, date: '04-12-2022', time:'20:00'},
{id: '55', stage:'knockoutstage', bracket: 'L16', poule1: "F", position1: 1, teamone: '', score1: 0, poule2: "E", position2: 2, teamtwo: '', score2: 0, date: '06-12-2022', time:'16:00'},
{id: '56', stage:'knockoutstage', bracket: 'L16', poule1: "H", position1: 1, teamone: '', score1: 0, poule2: "G", position2: 2, teamtwo: '', score2: 0, date: '06-12-2022', time:'20:00'},

{id: '57', stage:'knockoutstage', bracket: 'Q', winner1: 49, teamone: '', winner2: 50, teamtwo: '', date: '09-12-2022', time:'16:00'},
{id: '58', stage:'knockoutstage', bracket: 'Q', winner1: 51, teamone: '', winner2: 52, teamtwo: '', date: '10-12-2022', time:'20:00'},
{id: '59', stage:'knockoutstage', bracket: 'Q', winner1: 53, teamone: '', winner2: 54, teamtwo: '', date: '09-12-2022', time:'20:00'},
{id: '60', stage:'knockoutstage', bracket: 'Q', winner1: 55, teamone: '', winner2: 56, teamtwo: '', date: '10-12-2022', time:'16:00'},

{id: '61', stage:'knockoutstage', bracket: 'S', winner1: 57, teamone: '', winner2: 58, teamtwo: '', date: '13-12-2022', time:'20:00'},
{id: '62', stage:'knockoutstage', bracket: 'S', winner1: 59, teamone: '', winner2: 60, teamtwo: '', date: '14-12-2022', time:'20:00'},

{id: '63', stage:'knockoutstage', bracket: 'LF', loser1: 61, teamone: '', loser2: 62, teamtwo: '', date: '17-12-2022', time:'16:00'},

{id: '64', stage:'knockoutstage', bracket: 'Fi', winner1: 61, teamone: '', winner2: 62, teamtwo: '', date: '18-12-2022', time:'16:00'}
]
;

module.exports = {teamlist:teamlist, poules:poules, matches:matches}
