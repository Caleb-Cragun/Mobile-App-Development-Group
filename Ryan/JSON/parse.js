function parse(){
    var employee= '{"name":"Ryan","address":"Here","favoriteColor":"Blue"}';
    var whatever=JSON.parse(employee);
    document.getElementById("parseOut").innerHTML=whatever.name+"<br>"
            +whatever.address+"<br>"+whatever.favoriteColor;
}

function parseBad(){
    var character= '{"name":Ryan,"address":Here,"favoriteColor":Blue}';
    var user=JSON.parse(character);
    document.getElementById("parseBadOut").innerHTML=user.name+"<br>"
            +user.address+"<br>"+user.phone;
}

