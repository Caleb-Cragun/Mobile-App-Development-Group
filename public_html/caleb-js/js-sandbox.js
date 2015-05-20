/*
*Tells what footware the user needs to wear
*input:weather
*processing:pending on weather, computes what footware they need
*output:footware
*/
function getfootware(){
	var weather=document.getElementById('weather').value;
	var footware;
	switch (weather){
		case 'hot':
		footware='Today you should wear sandals.';
		break;

		case 'rain':
		footware='Today you should wear galoshes.';
		break;

		case 'snow':
		footware='Today you should wear boots.';
		break;
		
		default:
		footware='Today you should wear shoes.';
		break;
	}
	document.getElementById('needed').innerHTML=footware;
}

//Gets the evens  
function getEvens(){
  var num1=parseFloat(document.getElementById('num1').value);
  var num2=parseFloat(document.getElementById('num2').value);
  var num3=parseFloat(document.getElementById('num3').value);
  var num4=parseFloat(document.getElementById('num4').value);
  var num5=parseFloat(document.getElementById('num5').value);
  var list=[num1,num2,num3,num4,num5];
  var output=countEvens(list);
  document.getElementById('evens').innerHTML=output;
}

//Counts the even numbers in an array
function countEvens(list){
  var nume=0;
  for (i=0;i<list.length;i++){
    if(list[i]%2==0){
      nume++;
    }
  }
  return nume;
}

//Associative array
function array(){
    var person=[];
    person[0]=document.getElementById('person1').value;
    person[1]=document.getElementById('person2').value;
    person[2]= document.getElementById('person3').value;
    document.getElementById('arrayOut').innerHTML= "Array length: "+ person.length
            +" Person: "+person[0];
}

//Loop function
function loop(){
      var num1=parseFloat(document.getElementById('count').value);
      var output='';
      for (i=0;i<=num1;i++){
          output+=i+'<br>';
      }
      document.getElementById('loopOut').innnerHTML=output;
}
//infinite loop
function loopBroke(){
    var output='';
    for (i=1;i>0;i++){
        output+=i+'<br>';
    }
    document.getElementById('brokenOut').innnerHTML=output;
}

function arrayBroke(){
    var person=[];
    person[0]=document.getElementById('person1').value;
    person[0]=document.getElementById('person2').value;
    person[0]= document.getElementById('person3').value;
    document.getElementById('arrayBrokeOut').innerHTML= "Array length: "+ person.length
            +" Person: "+person[0];
}

//Gets the evens  
function getBrokeEvens(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  var num3=document.getElementById('num3').value;
  var num4=document.getElementById('num4').value;
  var num5=document.getElementById('num5').value;
  var list=[num1,num2,num3,num4,num5];
  var output=countEvens(list);
  document.getElementById('evensBroke').innerHTML=output;
}

//Counts the even numbers in an array
function countEvens(list){
  var nume=0;
  for (i=0;i<=list.length;i++){
    if(list[i]%2==0){
      nume++;
    }
  }
  return nume;
}

function getBrokefootware(){
	var weather=document.getElementById('weather').value;
	var footware;
	switch (weather){
		case '':
		footware='Today you should wear sandals.';
		break;

		case '':
		footware='Today you should wear galoshes.';
		break;

		case '':
		footware='Today you should wear boots.';
		break;
		
		default:
		footware='Today you should wear shoes.';
		break;
	}
	document.getElementById('neededBroke').innerHTML=footware;
}