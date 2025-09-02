const { workerData } = require("worker_threads");

const repeatString = function(word, number) { //Erklärung: Diese Funktion wiederholt einen bestimmten String eine bestimmte Anzahl von Malen.
  if(number < 0) 
    return("ERROR"); //Erklärung: Wenn die Anzahl kleiner als 0 ist, wird eine Fehlermeldung ausgegeben.
     let string =""; //Erklärung: Diese Variable speichert den wiederholten String.
       for (let i = 0; i < number; i++ ){ //Erklärung: Diese Schleife wiederholt den String so oft, wie die Anzahl angibt.
         string += word //Erklärung: Diese Zeile fügt den String zur Variablen string hinzu.
         
}
return (string);
};  
  

console.log(repeatString("he o ", 3));

// Do not edit below this line
module.exports = repeatString;

