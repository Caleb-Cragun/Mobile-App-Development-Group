/*
 * JSON parse function with user input
 */
function parse(){
    var character= '{"name":"The Dragon Warrior","address":"123 Bodacity Dr.","phone":"Dont call me, I call you"}';
    var user=JSON.parse(character);
    document.getElementById("parseOut").innerHTML=user.name+"<br>"
            +user.address+"<br>"+user.phone;
}

function parseBad(){
    var character= '{"name":The Dragon Warrior,"address":123 Bodacity Dr.,"phone":Dont call me, I call you}';
    var user=JSON.parse(character);
    document.getElementById("parseBadOut").innerHTML=user.name+"<br>"
            +user.address+"<br>"+user.phone;
}