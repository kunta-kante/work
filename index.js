//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
const x = 4;
const y = 5;
//console.log(x + y);

//Afficher la chaine de caractère suivante en majuscule
//const team = 'avengers';
//je decleare le variable team en maChaine 
//const maChaine = team.toUpperCase();
//team.toUpperCase
//console.log(maChaine);

//Afficher la première lettre de la chaine de caractère suivante
//let team = 'avengers';
//je decleare le variable team en firstLetter
//const firstLetter = team[0];

//console.log(team[0]);

//afficher la chaine de caractère suivante excepté la première lettre.
//let team = 'avengers';


//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
let firstName = 'Tony';
let lastName = 'Stark';
let fullName = firstName + ' ' + lastName;
//console.log(fullName);


//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
let team = 'aveNgers';
let firstLetter = team.toUpperCase();
let maChaine = firstLetter.toUpperCase();
//console.log(maChaine);
//TODO

//Pause ! Va boire un café ! Tu le mérites...

//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2
const villes = ['Paris', 'Marseille', 'Lille', 'Nancy', 'Lyon'];
let elements = villes[2];
//console.log(elements);
villes.push('Nantes');
//console.log(villes);


//Les boucles
//
//Comme tu le sais sans doute, pour parcourir un tableau,
//il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//élément au carré et affiche le tableau.

const array1 = [2, 4, 8];
for (let index = 0; index < 3; index++) {
    console.log(array1);
}


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];
for (let index = 0; index < 3; index++) {

}



//les conditions

//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18


// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin


//Va reboir un café ! Bravo
//Et pense à commit ton projet


// La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux 
// termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses 
// premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, etc...
// Code un algorithme qui calcul les 50 premiers termes de la suite.



// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.

//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés