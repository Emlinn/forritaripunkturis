// Rotues

module.exports = function(app, passport) {

	// Front-Page
	app.get('/', function(req, res) {
		res.render('index');
	});

	// Login
	app.get('/login', function(req, res) {
		res.render('login', {message: req.flash('loginMessage')});
	});

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