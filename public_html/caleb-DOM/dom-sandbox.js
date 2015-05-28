function runDom(){
    var clicker = document.createElement('BUTTON');
    var text = document.createTextNode('Infinite Improbability Drive');
    clicker.appendChild(text);
    document.body.appendChild(clicker);
}
function newHitchhiker(){
    var name=document.getElementById('name1').value;
    var editor = document.createElement('LI');
    var text = document.createTextNode(name);
    editor.appendChild(text);
    
    var list=document.getElementById('hitchhikers');
    list.insertBefore(editor, list.firstElementChild);
}
function removeHitchhiker(){
    var list=document.getElementById('hitchhikers');
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
    var text = document.createTextNode('Infinite Improbability Drive');
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