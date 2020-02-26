"use strict"

// function Robot(name,worksName){
// this.name=name;
// this.worksName = worksName;
//	
// this.work = function(){
// console.log('Я ' + this.name + ' - ' + this.worksName);
// }
// }
//
// function CoffeRobot (name,worksName){
// Robot.call(this);
// this.name=name;
// this.worksName = worksName;
// }
// function RobotDancer (name,worksName){
// Robot.call(this);
// this.name=name;
// this.worksName = worksName;
// }
// function RobotCoocker (name,worksName){
// Robot.call(this);
// this.name=name;
// this.worksName = worksName;
// }
//
// var robot = new Robot('Robot','я просто працюю');
// var coffeRobot = new CoffeRobot('CoffeRobot ','я варю каву');
// var robotDancer = new RobotDancer('RobotDancer','я просто танцюю');
// var robotCoocker = new RobotCoocker('RobotCoocker','я просто готую');
//
// robot.work();
// coffeRobot.work();
// robotDancer.work();
// robotCoocker.work();
// console.log();
//
// var arrRob = [robot,coffeRobot,robotDancer,robotCoocker];
// for (var i = 0; i < arrRob.length; i++) {
// arrRob[i].work();
// }
// -------------------------------------------------------
function Robot(name, worksName) {
	this.name = name;
	this.worksName = worksName;

	Robot.prototype.work = function() {
		console.log('Я ' + this.name + ' - ' + this.worksName);
	}
}

function CoffeRobot(name, worksName) {
	Robot.call(this);
	this.name = name;
	this.worksName = worksName;
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

function RobotDancer(name, worksName) {
	Robot.call(this);
	this.name = name;
	this.worksName = worksName;
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker(name, worksName) {
	Robot.call(this);
	this.name = name;
	this.worksName = worksName;
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var robot = new Robot('Robot', 'я просто працюю');
var coffeRobot = new CoffeRobot('CoffeRobot ', 'я варю каву');
var robotDancer = new RobotDancer('RobotDancer', 'я просто танцюю');
var robotCoocker = new RobotCoocker('RobotCoocker', 'я просто готую');

robot.work();
coffeRobot.work();
robotDancer.work();
robotCoocker.work();
console.log();

var arrRob = [ robot, coffeRobot, robotDancer, robotCoocker ];
for (var i = 0; i < arrRob.length; i++) {
	arrRob[i].work();
}
