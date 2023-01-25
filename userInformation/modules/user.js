class User{
    constructor(name, email, prof, github, phone){
        this.name = name; 
        this.email = email; 
        this.prof = prof; 
        this.gitshub = github; 
        this.phone = phone;
    }
}

function printCard(name, email, prof, github, phone){
    document.querySelector("#card-name").innerHTML = name;
    document.querySelector("#card-email").innerHTML = email;
    document.querySelector("#card-prof").innerHTML = prof;
    document.querySelector("#card-github").innerHTML = github;
    document.querySelector("#card-phone").innerHTML = phone;
}

export default User;
export {printCard};
