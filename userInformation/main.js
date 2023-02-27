import User, {printCard} from './modules/user.js'


const element = document.getElementById("botao");
element.addEventListener("click", getValues, false);



function getValues(){
    const nome = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const prof = document.querySelector("#prof").value;
    const github = document.querySelector("#github").value;
    const phone = document.querySelector("#phone").value;

    printCard(nome, email, prof, github, phone); 
}