var Test = require('../app/models/user');

// Rotues
module.exports = function(app, passport) {

	// Front-Page
	app.get('/', function(req, res) {
		Test.find({}, {'local.firstname': 1, 'local.lastname': 1, 'local.birthday': 1, 'local.degrees':1, 'local.textColumn':1, 'local.careerJob': 1, _id: 1}, function(err, show){
			if(err) return console.log(err);
			res.render('index', {
				usersprofile: show
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
		//console.log(req.body.fullName);
		console.log(req.body);
		console.log(req.body.men);
		console.log(req.user._id);
		console.log(req.body.comments);
		//Test.save({_id:req.user._id, fullname:req.body.fullName},{w:1});
		req.user.local.firstname = req.body.firstName;
		req.user.local.lastname = req.body.lastName;
		req.user.local.birthday = req.body.dateBirth;
		if(req.body.men) {
			req.user.local.men = "checked";
		}
		if(req.body.women){
			req.user.local.women = "checked";
			req.user.local.men = "";
		}
		if(req.body.careerJob) {
			req.user.local.careerJob = "checked";
		}
		else {
			req.user.local.careerJob = "";	
		}
		if(req.body.summerJob) {
			req.user.local.summerJob = "checked";
		}
		else {
			req.user.local.summerJob = "";	
		}
		if(req.body.partialJob) {
			req.user.local.partialJob = "checked";
		}
		else {
			req.user.local.partialJob = "";	
		}
		if(req.body.assignmentJob) {
			req.user.local.assignmentJob = "checked";
		}
		else {
			req.user.local.assignmentJob = "";	
		}
		if(req.body.startupJob) {
			req.user.local.startupJob = "checked";
		}
		else {
			req.user.local.startupJob = "";	
		}
		req.user.local.textColumn = req.body.textColumn;
		req.user.local.website = req.body.website;
		req.user.local.feisbook = req.body.facebook;
		req.user.local.skype = req.body.skype;
		req.user.local.telephone = req.body.telephone;
		req.user.local.degrees = req.body.selectDegree;
		
		

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

	app.get('/about', function(req, res){
  		res.render('about', {
    	title: 'About'
  });
});


	// Users
	app.get('/:id?', function(req, res) {
		var id = req.params.id;
		Test.find({_id: id}, {'local.firstname': 1, 'local.birthday': 1, _id: 1}, function(err, show){
			if(err) return console.log(err);
			res.render('users', {
				usersprofile: show
			});
		});
	});

	app.get('/:id/delete', function(req,res){
		Test.remove({_id: req.params.id}, function(err){
			if(err) return console.log(err);
			else res.redirect('/');
		});
	});

};

// Function fyrir redirect ef ekki loggaður inn -> Redirect á frontpage
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();

	res.redirect('/');
}