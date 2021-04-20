const express = require('express');
const app = express();

const expressJsx = require('./express-jsx');

app.engine('jsx', expressJsx);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
	res.render('index', { hello: 'hello', world: 'world' });
});

app.listen(3000, () => {
	console.log('Listening on port http://localhoost:3000');
});
