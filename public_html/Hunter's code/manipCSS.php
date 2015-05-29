<head>
    <style>
        p {display:inline}
    </style>
</head>
<body>
    <main>
        <span id="top">These are words</span><br>
        <span id="id13959">Color Me</span><br>
        <button id="b1">Button 1</button><br>
        <button id="b2">Button 2</button><br>
        <button id="b3">Button 3</button><br>
        <button id="b4">Button 4</button><br>
        <button id="b5">Button 5</button><br>
        <button id="b6">Button 6</button><br>

        <br><br>
        <p id="1"> A </p><p id="2"> A </p><p id="3"> A </p><p id="4"> A </p><p id="5"> A </p><br>
        <p id="6"> A </p><p id="7"> A </p><p id="8"> A </p><p id="9"> A </p><p id="10"> A </p><br>
        <p id="11"> A </p><p id="12"> A </p><p id="13"> A </p><p id="14"> A </p><p id="15"> A </p><br>
        <p id="16"> A </p><p id="17"> A </p><p id="18"> A </p><p id="19"> A </p><p id="20"> A </p><br>
        <p id="21"> A </p><p id="22"> A </p><p id="23"> A </p><p id="24"> A </p><p id="25"> A </p><br>
    </main>
    

<script>
    //document.addEventListener(event, function, [useCapture]);
    // assign variables
    var txt = document.getElementById("top");
    var b1 = document.getElementById('b1');
    
    //HAPPY PATH  set variables    
    var xx = document.getElementById("id13959");
    var button1 = document.getElementById("b1");
    var button2 = document.getElementById("b2");
    
    //HAPPY PATH  execute
    button1.addEventListener("click", function () {xx.style.color="red";} , false);
    button2.addEventListener("click", function () {xx.style.color="blue";} , false);
    
    //HAPPY PATH  all in 1 line
    document.getElementById('b3').addEventListener("click", function () {document.getElementById('b3').innerHTML = "This is words";});
    
    //HAPPY PATH  We can name the function, but don't have to
    document.getElementById('b4').addEventListener("click", function namedFunction () {document.getElementById('b4').innerHTML = "These are words";});
    
    //NASTY PATH  does not call function, throws error
    //document.getElementById('b5').addEventListener("click", function aFunction () );
    //function aFunction ()
    //{document.getElementById('b5').innerHTML = "Changing words";}
    
    //NASTY PATH  will not grab any ID
    //var button5 = document.getElementById(b5);
    
    //NASTY PATH  ERROR: blue is not defined
    var button5 = document.getElementById('b5');
    button5.addEventListener("click", function () {xx.style.color=blue;} , false);
    
    //NASTY PATH  does not throw error, but does not change anything
    var button6 = document.getElementById('b6');
    button6.addEventListener("click", function () {xx.style.color='null';} , false);
    
    //HAPPY PATH  changes text, doesn't break anything
    var button6 = document.getElementById('b6');
    button6.addEventListener("click", function () {xx.innerHTML='It still works if we change the text';} , false);

/* --
NOTES
CSS	JavaScript
padding:1em                 .style.padding="1em"
border:solid thin red       .style.border="solid thin red"
background-color:red        .style.backgroundColor="red"
font-size:large             .style.fontSize="large"
font-family:"DejaVu Sans"   .style.fontFamily='"DejaVu Sans",sans-serif'
,sans-serif
    
 */

/************************
 * Walk around board
 *************************/
var i = 13;
document.getElementById(i.toString()).style.color = "red";
//On left arrow
window.onkeypress = function(event) {
    //left
   if (event.keyCode == 37) {
      if ((i != 1) && (i != 6) && (i != 11) && (i != 16) && (i != 21))
      {
          document.getElementById(i.toString()).style.color = "black";
          i--;
          document.getElementById(i.toString()).style.color = "red";
      }
   }
   //up
   if (event.keyCode == 38) {
      if ((i != 1) && (i != 2) && (i != 3) && (i != 4) && (i != 5))
      {
          document.getElementById(i.toString()).style.color = "black";
          i -= 5;
          document.getElementById(i.toString()).style.color = "red";
      }
   }
   //right
   if (event.keyCode == 39) {
      if ((i != 5) && (i != 10) && (i != 15) && (i != 20) && (i != 25))
      {
          document.getElementById(i.toString()).style.color = "black";
          i++;
          document.getElementById(i.toString()).style.color = "red";
      }
   }
   //down
   if (event.keyCode == 40) {
      if ((i != 21) && (i != 22) && (i != 23) && (i != 24) && (i != 25))
      {
          document.getElementById(i.toString()).style.color = "black";
          i += 5;
          document.getElementById(i.toString()).style.color = "red";
      }
   }
}


</script>