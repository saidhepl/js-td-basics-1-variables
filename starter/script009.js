/*****************************
 * 009 - Mutation de variable et conversion de type
 */

// 1. Initialisez les variables firstName à "John" et age à 28.
const firstname="John";
let age=28;

// Conversion de type

// 2. Affichez la phrase "John a 28 ans" en utilisant les variables et affichez le type de cette expression.
console.log(firstname + " a " + age)
console.log(typeof (firstname + " a " + age));
// 3. Déclarez les variables job et isMarried, puis affectez la valeur "professeur" à job et false à isMarried.
// Ensuite, affichez la phrase "John est un professeur de 28 ans. Est-il marié ? false".
let job="professeur";
let isMarried =false;
console.log(firstname + " est un " + job +" de " + age + " ans. Est-il marié "+isMarried)
// Variable mutation

// 4. Affectez la valeur "vingt-huit" à la variable age et la valeur "conducteur" à la variable job.
// Ensuite, affichez la phrase précédente dans une boîte de dialogue.
age="vingt-huit";
job="conducteur";
alert(firstname + " est un " + job + " de " + age + " ans. Est-il marié ? " + isMarried);

// 5. Affichez une boîte de dialogue demandant "Quel est son nom de famille ?"
// pour permettre à l'utilisateur d'entrer le nom de famille de John.
// Stockez ce nom dans une variable lastName,
// puis affichez "Le nom de famille de John est … (le nom

alert(prompt("Quel est son nom de famille ?"))
let lastName=prompt("Le nom de famille de John est ")
console.log("Le nom de famille de John est " + lastName);

