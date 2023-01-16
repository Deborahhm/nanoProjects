import Fibonacci, {getTerm} from "./fibonacci.js";


function printFibonacci(terms){
let frase = " "; 

if(terms < 0){
    frase = "quantidade de números menor que zero. Não existe sequencia";
}else if(terms < 2 && terms > 0){
    frase = getTerm(terms);
}else{
    for (let i=0; i<terms; i++){
    frase += getTerm(i) + " ";
    }
}
return frase;
}

export{printFibonacci};