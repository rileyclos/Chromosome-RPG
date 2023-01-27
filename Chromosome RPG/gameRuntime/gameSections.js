/*TILE NAME --> TILE ID
grass --> 0
bricks --> 1
*/
const regxxxx = [
  "Name",
/*row1*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row2*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row3*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row4*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row5*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row6*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row7*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1",
/*row8*/"-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"
]
const regyyyy = [
  "Name",
/*row1*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row2*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row3*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row4*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row5*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row6*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row7*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row8*/"0","0","0","0","0","0","0","0","0","0","0","0"
]
const regp0p0 = [
  "Spawn",
/*row1*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row2*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row3*/"1","1","1","1","1","1","1","1","0","0","0","0",
/*row4*/"1","1","1","1","1","1","1","1","0","0","0","0",
/*row5*/"1","1","1","1","1","1","1","1","0","0","0","0",
/*row6*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row7*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row8*/"0","0","0","0","0","0","0","0","0","0","0","0"
]
const regn1p0 = [
  "Spawn",
/*row1*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row2*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row3*/"1","1","1","1","1","1","1","1","1","1","1","1",
/*row4*/"1","1","1","1","1","1","1","1","1","1","1","1",
/*row5*/"1","1","1","1","1","1","1","1","1","1","1","1",
/*row6*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row7*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row8*/"0","0","0","0","0","0","0","0","0","0","0","0"
]
const regp0p1 = [
  "Spawn",
/*row1*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row2*/"1","1","1","0","0","1","1","1","0","0","0","0",
/*row3*/"1","1","1","0","0","1","1","1","0","0","0","0",
/*row4*/"0","1","1","0","0","1","1","1","0","0","0","0",
/*row5*/"0","1","1","1","1","1","1","1","0","0","0","0",
/*row6*/"0","1","1","1","1","1","1","1","0","0","0","0",
/*row7*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row8*/"0","0","0","0","0","1","1","1","0","0","0","0"
]
const regn1p1 = [
  "Spawn",
/*row1*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row2*/"1","1","1","1","1","0","0","0","1","1","1","1",
/*row3*/"1","1","1","1","1","1","1","1","1","1","1","1",
/*row4*/"0","0","0","0","1","1","1","1","1","0","0","0",
/*row5*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row6*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row7*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row8*/"0","0","0","0","0","0","0","0","0","0","0","0"
]
//fun fact: this region below was made while showing my parents the game! 26 jan. 2023//
const regn2p1 = [
  "Spawn",
/*row1*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row2*/"0","0","0","0","0","0","0","0","1","1","1","1",
/*row3*/"0","0","1","1","1","1","1","1","1","1","1","1",
/*row4*/"1","1","1","1","1","1","1","1","1","1","0","0",
/*row5*/"1","1","1","3","3","3","3","3","1","1","0","0",
/*row6*/"0","1","1","3","3","3","3","3","1","1","0","0",
/*row7*/"0","1","1","3","3","3","3","3","1","1","0","0",
/*row8*/"0","1","1","3","3","3","3","3","1","1","0","0"
]
const regn2p0 = [
  "Spawn",
/*row1*/"0","1","1","3","3","3","3","3","1","1","0","0",
/*row0*/"0","1","1","3","3","3","3","3","1","1","0","0",
/*row3*/"0","1","1","3","3","3","3","3","1","1","1","1",
/*row4*/"0","1","1","3","3","3","3","3","1","1","1","1",
/*row5*/"1","1","1","1","1","1","1","1","1","1","1","1",
/*row6*/"1","1","1","1","1","1","1","1","1","1","1","0",
/*row7*/"1","1","1","1","1","1","1","1","1","1","1","0",
/*row8*/"0","0","0","0","0","0","0","0","0","0","0","0"
]
const regp0p2 = [
  "Name",
/*row1*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row2*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row3*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row4*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row5*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row6*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row7*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row8*/"0","0","0","0","0","1","1","1","0","0","0","0"
]
const regp0p3 = [
  "Name",
/*row1*/"0","0","0","0","1","1","1","1","1","0","0","0",
/*row2*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row3*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row4*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row5*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row6*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row7*/"0","0","0","0","0","1","1","1","0","0","0","0",
/*row8*/"0","0","0","0","0","1","1","1","0","0","0","0"
]
const regp0p4 = [
  "Name",
/*row1*/"0","0","0","0","0","0","0","0","0","0","0","0",
/*row2*/"0","0","0","0","1","1","1","0","0","0","0","0",
/*row3*/"0","0","0","1","1","1","1","1","0","0","0","0",
/*row4*/"0","0","1","1","1","1","1","1","1","0","0","0",
/*row5*/"0","0","1","1","1","1","1","1","1","0","0","0",
/*row6*/"0","0","1","1","1","1","1","1","1","0","0","0",
/*row7*/"0","0","1","1","1","1","1","1","1","0","0","0",
/*row8*/"0","0","0","1","1","1","1","1","0","0","0","0"
]