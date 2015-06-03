<!DOCTYPE html>
<html>
<head>
<title>JavaScript loops, arrays, variables</title>
<meta charset="UTF-8">
</head>
<body>
<script>
    //HAPPY PATH  write and concatinate strings; semicolon not needed
    document.write('string' + ' ' + 'more string' + '<br>')
    
    //NASTY PATH  these break the whole page
    //document.write(another string);
    //document.write('another string'');
    
    //NASTY PATH  first write will print 'undefined'
    document.write(document.write('embedded')); document.write('<br>');
    
    //NASTY PATH  will convert ints to strings
    document.write('86' + 834 + 12);            document.write('<br>');
    //HAPPY PATH will print string then number
    document.write('86' + (834 + 12));          document.write('<br>');
    
    //NASTY PATH  will not be read, case sensitive function
    //document.WRITE('string');					document.write('<br>');

	//HAPPY PATH array
	var week = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
	
	//HAPPY PATH all variables must be defined
	var bad1 = ["SUN", null, "TUE", 0, "THUR", "FRI", "SAT"];
	
	//NASTY PATH null is case-sensitive, must be lower-case
	//var wrong1 = [NULL, "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

	//HAPPY PATH loop through array
	for (i = 0; i < week.length; i++) {
    document.write("The next day is " + week[i] + "<br>");
	} document.write('<br>');
	
	//HAPPY PATH loop through array
	for (i = 0; i < bad1.length; i++) {
    document.write("The next day is " + bad1[i] + "<br>");
	} document.write('<br>');
	
	//HAPPY PATH loop through integers; use 2 commands in FOR
	for (i = 0; i < 10; i++, i += 1) {
    document.write("This number is " + i + "<br>");
	} document.write('<br>');
	
	//NASTY PATH broken comparison, will always evaluate to false
	for (i = 0; i > 10; i++) {
    document.write("This number is " + i + "<br>");
	} document.write('<br>');
	
	//NASTY PATH broken comparison, will always evaluate to false
	for (i = 0; i > 10; i++) {
    document.write("This number is " + i + "<br>");
	} document.write('<br>');
	
	//NASTY PATH jeff is not defined
	//for (i = 0; i < jeff; i++) {
    //document.write("This number is " + i + "<br>");
	//} document.write('<br>');
	
	//NASTY PATH simply does not run
	for (i = 0; i < "jeff"; i++) {
    document.write("This number is " + i + "<br>");
	} document.write('<br>');
	
	//HAPPY PATH counts starting at null
	for (i = null; i < 10; i++) {
    document.write("This number is " + i + "<br>");
	} document.write('<br>');
	
	//NASTY PATH    NO NO NO NO NO NO NO NO NO NO NO NO!!!!
	//for (i = 1; i > null; i++) {
    //document.write("This number is " + i + "<br>");
	//} document.write('<br>');
	
</script>
</body>
</html>