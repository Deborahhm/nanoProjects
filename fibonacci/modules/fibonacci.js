class Fibonacci{
    constructor(number){
        this.number = number;
    }
}

function getTerm(number){
    if(number < 2){
        return number;
    }
    else{
        return getTerm(number - 1) + getTerm(number - 2);
    }
}


export default Fibonacci;
export {getTerm};

