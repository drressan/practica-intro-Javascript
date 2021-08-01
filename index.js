import {teams} from './teams.js'
import LigaDeFutbol from './classes/LigaDeFutbol.js';


// const configLigaDeFutbol ={//5.2 creamos esta constante para pasarla como atributo al liga de futbol 
//     vueltas:2,
//     puntosPorVictoria:10,
//     puntosPorEmpatar:2,
//     puntosPorPerder:-1
// }

const laLiga = new LigaDeFutbol('LaLiga',teams);//5.3 enviamos el atributo plano como parametro
console.log(`El nombre de la liga es ${laLiga.name}`);
const teamNames =laLiga.teams.map(equipo => {
return{
    teamName:equipo.name,
    currentPoints:equipo.puntos
}});
teamNames.forEach (teamName => {
    console.log(teamName)
})
//for (let i in laLiga.teams){//5 consumimos sel for para mostrar los nombres desde la llamada directamente tipo console.log(`El nombre de la liga es ${laLiga.nombre}`);
//    const team = laLiga.teams[i];
 //   console.log(team);
//}


//necesitamos 
//equipos
//jornadas
//partidos
//lugares
//puntos
//clasificacion
