const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/index.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");
	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);

	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);

	// Set to true if you need the website to include cookies in the requests sent
	res.setHeader("Access-Control-Allow-Credentials", true);

	// Pass to next layer of middleware
	next();
});
routes(app);
app.use(express.static(path.join(__dirname, 'build')));
app.use('/assets',express.static('./assets'))
app.use('/public', express.static('./build/assets/'));
app.use('/static', express.static('./build/static/'));
app.get('/*',function (req, res) { 
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
app.listen(80,(err)=>{
    if(err) console.log(err);
    console.log('site is live on port 80')
})