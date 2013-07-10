var fs = require('fs');
	fs.readFile('./index.html', function(err, data){

if (err) throw err;

		console.log(data.toString());
//		console.log(data);
	});

