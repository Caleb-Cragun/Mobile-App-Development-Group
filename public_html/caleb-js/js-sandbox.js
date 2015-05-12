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