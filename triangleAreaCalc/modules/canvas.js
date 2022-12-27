import Triangle, {getArea,getX,getY,getWidth, getheight} from './triangle.js'; 

const tri1 = new Triangle(25,100,50,50)

function drawACanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    /*ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    */
    ctx.beginPath();
    ctx.moveTo(getX(tri1), getY(tri1));
    ctx.lineTo(getX(tri1) + (getWidth(tri1)/2), (getY(tri1) - getheight(tri1)));
    ctx.lineTo((getX(tri1) + getWidth(tri1)), getY(tri1));
    ctx.fill();
}

export {drawACanvas};