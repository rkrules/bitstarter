var express = require('express');
var fs = require('fs');


  //response.send('Hello World1!');
	fs.readFileSync('./index.html', function(err, data){
		if (!err) 
		response.send(data.toString());
	});


