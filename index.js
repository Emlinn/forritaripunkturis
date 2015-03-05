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

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_name', function(err) {
	if(err){
		throw err;
	}else {
		console.log("working");
	}
}); // Tengist gagnagrunni.


// app/models/profileinfo.js

var mongoose = require('mongoose');


// Database Schema fyrir profileinfo models
var profileinfoSchema = mongoose.Schema({

		email		: String,
		name		: String
		

});
/*
// Býr til model fyrir profileinfo
var Profilemodel = mongoose.model('Profileinfo', profileinfoSchema);

var johndoe = new Profilemodel ({
	email: 'johndoe@email.com',
	name: 'John Doe'
});

//johndoe.save(function (err) {if (err) console.log('Error on save')});

Profilemodel.find({}, {email: 1, _id: 0}, function(err, todos){
	if(err) return console.log(err);
	console.log(todos);
});


export.index = function(req, res) {
	Profilemodel.find(function (err, profile, count) {
		res.render('index', {
			profileinfos: profileinfos
		});
	});
}
*/
/*
var userSchema = mongoose.Schema({
	local			: {
		email		: String,
		password	: String,
	}
});
module.exports = mongoose.model('User', userSchema);

var Schema   = mongoose.Schema;
var persons = new Schema({
    users    : String
});

exports.index = function ( req, res ){
  persons.find( function ( err, todos, count ){
    res.render( 'index', {
      title : 'Express Todo Example'
    });
  });
};
*/
var mamma = '22';
require('./config/passport')(passport);

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


app.locals.scripts = [];
app.locals.addScripts=function (all) {
    app.locals.scripts = [];
    if (all != undefined) {
        return all.map(function(script) {
            return "<script src='/javascripts/" + script + "'></script>";
        }).join('\n ');
    }
    else {
        return '';
    }
};
app.locals.getScripts = function(req, res) {
    return scripts;
};

// Routes
require('./app/routes.js')(app, passport);

// Keyrsla
app.listen(port);
console.log('Hlusta á porti ' + port);