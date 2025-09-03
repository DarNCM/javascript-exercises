const reverseString = function(string) {
    return string.split("").reverse().join(""); //Erklärung: Diese Funktion gibt den String in umgekehrter Reihenfolge zurück. 
    //.split() = Diese Methode teilt einen String in ein Array von Teilstrings auf.
    //.reverse() = Diese Methode kehrt die Reihenfolge der Elemente in einem Array um.
    //.join() = Diese Methode verbindet alle Elemente eines Arrays zu einem String.
};

// Do not edit below this line
module.exports = reverseString;
