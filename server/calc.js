function add(x, y){
    return x + y;
}
function substract(x, y){
    return x - y;
}
function divide(x, y){
    if(y == 0) return "can't divide by zero";
    return x/y;
}
function multiply(x, y){
    return x*y;
}

module.exports = {
    add,
    substract,
    divide,
    multiply
}