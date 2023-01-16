import Fibonacci, {getTerm} from './modules/fibonacci.js'
import { printFibonacci } from './modules/printFibonacci.js';



const element = document.getElementById("container-button");
element.addEventListener("click", getVal, false);

function getVal() {
    
    const terms = document.querySelector("#terms").value;
    const sequence = printFibonacci(terms); 
    console.log(sequence); 
    document.querySelector("#demo").innerHTML = sequence;
}
   
