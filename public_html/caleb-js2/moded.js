function Person(aFirstName,aLastName,anAge,aPower){
    SuperVillian.call(this);
    var coin = Math.floor(Math.random()*2);
    if (coin == 1){
      SuperHero.call(this);
    }
    this.firstName=aFirstName;
    this.lastName=aLastName;
    this.age=anAge;
    this.power=aPower;
}
function SuperHero() {
  this.description="Classification: Superhero";
}
function SuperVillian() {
  this.description="Classification: Supervillian";
}

//Object creation
function createObject(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var age=document.getElementById('age').value;
    var suppower=document.getElementById('superpower').value;
       
    var hero=new Person(fname,lname,age,suppower);
    
    document.getElementById('objectOut').innerHTML=
            'Firstname: '+hero.firstName+'<br>'+
            ' Lastname: '+hero.lastName+'<br>'+
            ' Age: '+hero.age+'<br>'+
            ' Super Power: '+hero.power+'<br>'+
            hero.description;
    }