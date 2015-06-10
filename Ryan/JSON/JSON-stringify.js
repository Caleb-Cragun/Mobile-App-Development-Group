/* 
 * Stringify sandbox
 */
function stringify(){
    var peeps = {
        troop : [
            { name: "Lisa", age: 24 },
            { name: "Johnna", age: 29 }
        ]
    };
    var jsonStr = JSON.stringify(peeps);
    document.getElementById('stringOut').innerHTML=jsonStr;
}

function stringifyBad(){
    var peeps = {
        troop : [
            {name: "Lisa", age: 24 ,
            name: "Johnna", age: 29}
        ]
    };
    var jsonStr = JSON.stringify(peeps);
    document.getElementById('stringBadOut').innerHTML=jsonStr;
}