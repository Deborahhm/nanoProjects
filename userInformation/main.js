import user, {printName, printAge} from './user.js'; 

let usr = new user('Bob', 24);
console.log(usr);
printName(usr);
printAge(usr);