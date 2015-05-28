/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Object creation
function createObject(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var age=document.getElementById('age').value;
    var suppower=document.getElementById('superpower').value;
    
    var hero={
        firstName:fname,
        lastName:lname,
        age:age,
        superPower:suppower
    };
    document.getElementById('objectOut').innerHTML=
            'Firstname: '+hero.firstName+
            ' Lastname: '+hero.lastName+
            ' Age: '+hero.age+
            ' Super Power: '+hero.superPower;
}

//Inheritance
function classification() {
  this.villian = superVillian;
  this.hero = superHero;
}
function subClass() {
  this.inheritFrom = classification;
  this.inheritFrom();
}
function superHero() {
  return "Classification: Superhero";
}
function superVillian() {
  return "Classification: Supervillian";
}
function printClass() {
  var newClass = new subClass();
  var output = '';
  var coin = Math.floor(Math.random()*2);
  if (coin == 1){
      output=newClass.hero();
  }else{
      output=newClass.villian();
  }
  document.getElementById('inherOut').innerHTML=output;
}

//Properties and methods 
function properties(){
    var hero={};
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var age=document.getElementById('age').value;
    var suppower=document.getElementById('superpower').value;
    var yofs=document.getElementById('yofs').value;
    var nat=document.getElementById('nationality').value;
    
    var hero={
        firstName:fname,
        lastName:lname,
        age:age,
        superPower:suppower,
        fullName:function(){
            return this.firstName + ' ' + this.lastName;
        },
        fullDes:function(){
            return this.fullName()+' '+this.age+' '+this.superPower;
        }
    };
    hero.yearsOfService=yofs;
    hero.origin=nat;
    
    document.getElementById('propOut').innerHTML=
            hero.fullDes()+
            " Nationality: "+ hero.origin+
            " Years of Service: "+hero.yearsOfService;
}