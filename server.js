const path = require('path');
const express = require('express');
const app = express();
	
app.use(express.static(path.join(__dirname, '/dist/website')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/website/index.html'));
});

// app.listen(process.env.PORT || 4201, () => {
//   console.log('Connected to Port'); //Listening on port 8888
// });

app.set( 'port', ( process.env.PORT || 4201 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });