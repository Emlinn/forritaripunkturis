// Index.js
// Tools
var express = require('express');
var app = express();
var port = process.env.PORT || 3000; // Hlustar á port og setur í variable.
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var multipart = require('multer');
var nodemailer = require('nodemailer');








mongoose.connect('mongodb://localhost/db_name', function(err) {
	if(err){
		throw err;
	}else {
		console.log("working");
	}
}); // Tengist gagnagrunni.


require('./config/passport')(passport);
app.use(multipart());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(express.static(__dirname + '/public')); // Nauðsynlegt til að komast í static public folder.
app.set('view engine', 'ejs'); // Setja upp ejs templating.

// Fyrir passport module
app.use(session({secret: 'something' }));
app.use(passport.initialize());  // Byrjar passport module.
app.use(passport.session());  // Importar session aðferð úr passport.
app.use(flash());

// Routes
require('./app/routes.js')(app, passport);

// Keyrsla
app.listen(port);
console.log('Hlusta á porti ' + port);