import { Courant } from "./models/courant";
import { Personne } from "./models/personne";

const personne : Personne = new Personne();

personne.Nom = "Doe";
personne.Prenom = "Jhon";
personne.DateNaissance = new Date("1986-05-16");

console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaissance}`);

const courant : Courant = new Courant();

courant.Numero = "0000-0000-0001";
courant.LigneDeCredit = 500;
courant.Titulaire = personne;

console.log("Test affichage courant");
console.log(`Numéro : ${courant.Numero}`);
console.log(`Solde : ${courant.Solde}`);
console.log(`Ligne de credit : ${courant.LigneDeCredit}`);
console.log(`Titulaire : `, courant.Titulaire);

// Test méthodes retrait & dépôt
courant.Depot(2000);
console.log(`Solde après dépôt de 2000 : ${courant.Solde}`);

courant.Retrait(700);
console.log(`Solde après retrait de 700 : ${courant.Solde}`);