/* 
 * Stringify sandbox
 */
function stringify(){
    var myData = {
        troop : [
            { name: "Tassidar", age: 82 },
            { name: "Zeratul", age: 79 }
        ]
    };
    var jsonStr = JSON.stringify(myData);
    document.getElementById('stringOut').innerHTML=jsonStr;
}

function stringifyBad(){
    var myData = {
        troop : [
            {name: "Tassidar", age: 82 ,
            name: "Zeratul", age: 79}
        ]
    };
    var jsonStr = JSON.stringify(myData);
    document.getElementById('stringBadOut').innerHTML=jsonStr;
}