function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}


let pvm="2021/08/21";

// funktio:
function pvmFin(vuosi, kk, pv){
  return pv+"."+kk+"."+vuosi;

}

console.log(pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));


console.log("täällä ollaan!");


let ika = 44;  // numerot kirjoitetaan iman lainau merkkiä
ika = ika + 1; //integer (int)

let ikakirjaimina = "44"; //string (str)
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log("sinun ikasi on" + ika);

let juuvaiei = true; // boolean

console.log("boolean: " + juuvaiei);

let nimi = "Iina Makkonen";

console.log("kirjoita isolla: " + nimi.toUpperCase());

console.log("splittaustaharjoitus: " + nimi.split(' ')[0]);

// while ja for loop:

for(let i=0; i<=10; i++){
  console.log("loopin iteraatioliki on: " + i);
}

if(ika > 18 || nimi == "Iina Makkonen"){
  console.log("onnea olet täysi-ikäinen! ja/tai olet Iina!");
}
else if (ika === 18 && nimi == "keijo"){
  console.log("onnea keijo, olet juuri ja juuri täysi-ikäinen!");
}
else{
  console.error("kasva vielä vähän...");
}

console.log(laskutehtava(394857, 23897));








/* 
monen 
rivin 
kommenti
*/