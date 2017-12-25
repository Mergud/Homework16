/*
Available figures: Square, Triangle, Circle
*/
var Sq = require('./calc_module');
var figure = 'Square';
var sq = new Sq(figure);

sq.getSquare(2);
sq.getTriangle(3, 4);
sq.getCircle(3);