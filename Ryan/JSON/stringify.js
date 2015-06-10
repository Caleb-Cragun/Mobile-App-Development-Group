function stringify(){
    var peeps = {
        group : [
            { name: "Lisa", age: 24 },
            { name: "Johnna", age: 29 }
        ]
    };
    var jsonStr = JSON.stringify(peeps);
    document.getElementById('stringOut').innerHTML=jsonStr;
}

function stringifyBad(){
    var peeps = {
        group : [
            {name: "Lisa", age: 24 ,
            name: "Johnna", age: 29}
        ]
    };
    var jsonStr = JSON.stringify(peeps);
    document.getElementById('stringBadOut').innerHTML=jsonStr;
}