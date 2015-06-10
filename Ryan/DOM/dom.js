//Good Dom Manipulation
function runDom(){
    var start = document.createElement('BUTTON');
    var text = document.createTextNode('Another Button');
    start.appendChild(text);
    document.body.appendChild(start);
}
//Adds Header
function runDom2(){
    var start2 = document.createElement('H1');
    var text = document.createTextNode('Header');
    start2.appendChild(text);
    document.body.appendChild(start2);
}
//My Tests

function addName(){
    var name=document.getElementById('name1').value;
    var editor = document.createElement('LI');
    var text = document.createTextNode(name);
    editor.appendChild(text);
    
    var list=document.getElementById('names');
    list.insertBefore(editor, list.firstElementChild);
}
function removeName(){
    var list=document.getElementById('names');
    list.removeChild(list.firstElementChild);
}
function addShip(){
    var name=document.getElementById('name2').value;
    var editor = document.createElement('LI');
    var text = document.createTextNode(name);
    editor.appendChild(text);
    
    var list=document.getElementById('ships');
    list.insertBefore(editor, list.firstElementChild);
}
function removeShip(){
    var list=document.getElementById('ships');
    list.removeChild(list.firstElementChild);
}

function button(){
    var clicker = document.createElement('Button');
    var text = document.createTextNode('Anything');
    clicker.appendChild(text);
    document.body.appendChild(text);
}
function hitchhiker(){
    var name=document.getElementById('name').value;
    var editor = document.createElement('LI');
    var text = document.createTextNode(name);
    editor.appendChild(text);
    
    var list=document.getElementById('hitchhikers');
    list.insertBefore(list, list.firstElementChild);
}
function ship(){
    var list=document.getElementById('SHIPS');
    list.removeChild(list.lastElementChild);
}