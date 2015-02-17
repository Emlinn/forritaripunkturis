var Test = require('../app/models/user');

// Rotues
module.exports = function(app, passport) {

	// Front-Page
	app.get('/', function(req, res) {
		Test.find({}, {'local.fullname': 1, _id: 0}, function(err, todos){
			if(err) return console.log(err);
			res.render('index', {
				mamma: todos
			});
		});
	});

	// Login
	app.get('/login', function(req, res) {
		res.render('login', {message: req.flash('loginMessage')});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile', 
		failureRedirect: '/login',
		failureFlash: true
	}));

	// Signup
	app.get('/signup', function(req, res) {
		res.render('signup', {message: req.flash('signupMessage')});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile', 
		failureRedirect: '/signup',
		failureFlash: true
	}));

	// Profile
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile', {
			user: req.user
		});
	});

	app.post('/profile', function(req, res, next) {
		console.log("jebb");
		console.log(req.body.fullName);
		console.log(req.user._id);
		//Test.save({_id:req.user._id, fullname:req.body.fullName},{w:1});
		
		req.user.local.fullname = req.body.fullName;
		

		req.user.save(function(err) {
			if(err) {
				throw err; 
			}
			else {console.log("tókst"); }
		});

		res.redirect('/profile');
		
	});
	

	// Logout
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

};

// Function fyrir redirect ef ekki loggaður inn -> Redirect á frontpage
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();

	res.redirect('/');
}