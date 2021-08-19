function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}


let pvm="2021/08/21";

// funktio:
function pvmFin(vuosi, kk, pv){
  if (kk==03 || kk==04 || kk== 05){
    return "kevät "+pv+"."+kk+"."+vuosi;
  }
  else if(kk==06 || kk==07 || kk==8){
    return "kesä "+pv+"."+kk+"."+vuosi;
  }
  else if(kk==09 || kk==10 || kk==11){
    return "syksy "+pv+"."+kk+"."+vuosi;
  }
  else { 
    return "talvi "+pv+"."+kk+"."+vuosi;
  }
}


for(let i=1; i<=15; i++)
console.log(i+ " " + pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));


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