var Sq = function(figure){
	this.figure = figure;
};

var result = 0;
Sq.prototype.getSquare = function(a){
		result = a*a;
		console.log('Площадь квадрата: ' + result);
};

Sq.prototype.getTriangle = function(a, h){
		var num = 0.5;
		result = num*a*h;
		console.log('Площадь треугольника: ' + result);
};

Sq.prototype.getCircle = function(a, p){
		var p = 3.14;
		result = p*a*a;
		console.log('Площадь круга: ' + result);
};

module.exports = Sq;