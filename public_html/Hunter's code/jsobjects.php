<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript objects</title>
    <meta charset="UTF-8">
    <script text/javascript> 
	//This is a constructor to create the object and give it default behavior. 
      function computer(brand, cost, type){
        this.brand = brand;
        this.cost = cost;
        kind.call(this, type);
      }; 
      //function for inheritance
      function kind(type){
        this.type = type;;
      };
      //This is a prototype, basically how you get callable methods for objects. This is a simple method to return a string of information about the object
      computer.prototype.toString = function() {
      return this.brand + ', $' + this.cost + ', ' + this.type;
      };
	  
	   //This is a constructor to create the object and give it default behavior. 
      
      //function to make the objects from the data above.
      function doStuff() {
        //Creating the new objects
        var mac = new computer('Apple',  2000, 'OSX');
        var pc = new computer('Dell', 800, 'Windows');
        //Displaying information about the objects to verify they were created.
        document.getElementById('stuff').innerHTML = (mac.toString() + '<br>' + pc.toString());
      };  
	     //bad code example 1, passing null to the objects
   
   
      //function to make the objects from the data above.
      function doStuff1() {
        //Creating the new objects
        var mac = new computer(null,  null, null);
        var pc = new computer(null, null, null);
        //Displaying information about the objects to verify they were created.
        document.getElementById('bad1').innerHTML = (mac.toString() + '<br>' + pc.toString());
      };
	  
	     //creating objects with extra parameters
  
      //function to make the objects from the data above.
      function doStuff2() {
        //Creating the new objects
        var mac = new computer('Apple',  2000, 'OSX', 'extra', 'extra1');
        var pc = new computer('Dell', 800, 'Windows', 'extra', 'extra1');
        //Displaying information about the objects to verify they were created.
        document.getElementById('bad2').innerHTML = (mac.toString() + '<br>' + pc.toString());
      };
	  
	     //This is a constructor to create the object and give it default behavior. 
     
      //function to make the objects from the data above.
      function doStuff3() {
        //Creating the new objects
        var mac = new computer();
        var pc = new computer();
        //Displaying information about the objects to verify they were created.
        document.getElementById('bad3').innerHTML = (mac.toString() + '<br>' + pc.toString());
      };
	  
	  
	  
	  
	  </script>
    
  </head>
  <body>
  
    <button type="button" onclick="doStuff()">Good path 1</button>
    <p id="stuff"></p>
    <button type="button" onclick="doStuff1()"> Bad path 1, null values</button>
    <p id="bad1"></p>
    <button type="button" onclick="doStuff2()"> Bad path 2, extra parameters </button>
    <p id="bad2"></p>
    <button type="button" onclick="doStuff3()"> Bad path 3, no parameters </button>
    <p id="bad3"></p>
    
  </body>
</html>