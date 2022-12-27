class Triangle{
    constructor(x,y,width, height){
        this.x = x;
        this.y = y; 
        this.width = width; 
        this.height = height; 
    }
}

function getArea(Triangle){
    let area = ((Triangle.width * Triangle.height)/2);
    return area;
}

function getX(Triangle){
    return Triangle.x; 
}

function getY(Triangle){
    return Triangle.y;; 
}

function getWidth(Triangle){ 
    return Triangle.width; 
}
function getheight(Triangle){ 
    return Triangle.height; 
}


export default Triangle; 
export {getArea,getX,getY,getWidth, getheight};