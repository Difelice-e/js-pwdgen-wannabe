let userName = prompt("inserisci il tuo nome");
// console.log(userName)

let userSurname = prompt("Inserisci il tuo cognome");
// console.log(userSurname)

let userColor = prompt("Inserisci il tuo colore preferito");
// console.log(userColor)

let userPass = (userName) + (userSurname) + (userColor) + "21";
// console.log(userPass)

document.getElementById("password").innerHTML += (userPass);