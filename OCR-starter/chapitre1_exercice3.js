// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?
    * quel est le résultat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/
// Cas 1 : 4 et 5 sont toutes deux de type nombres
const a = 4;
const b = 5;
const allNombre = a + b;
// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const aString= "4";
const bString = "5"
const allString= aString+ bString;
// Cas 3 : 4 est de type chaîne et 5 est de type nombre

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
const allStringGuillemet= "aString+ bString";


console.log(allNombre)
console.log(allString)
console.log(aString, b)
console.log(allStringGuillemet)
