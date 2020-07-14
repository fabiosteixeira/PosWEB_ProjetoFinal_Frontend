// var path = require('path');
// var express = require('express');
// var app = express();

// const publicPath = path.join(__dirname, '../PosWEB_ProjetoFinal_Frontend/', 'src');

// app.use(express.static(path.join(__dirname, 'dist')));
// app.set('port', process.env.PORT || 8080);

// var server = app.listen(app.get('port'), function() {
//   console.log('listening on port ', server.address().port);
// });

// app.get('*', (req, res) => {    
//   res.sendFile(path.join(publicPath, 'index.html')), function(err) {             
//   if (err) {                 
//        res.status(500).send(err) 
//        }        
//   };
// });



const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log("server started");
