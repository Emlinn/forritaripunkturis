var Test = require('../app/models/user');
var Article = require('../app/models/article');
var fs = require('fs');


// Rotues
module.exports = function(app, passport) {

	// Front-Page
	app.get('/', function(req, res) {
		Test.find({}, {'local.firstname': 1, 
			'local.lastname': 1, 
			'local.birthday': 1, 
			'local.degrees':1,
			'local.job':1, 
			'local.headline':1, 
			'local.telephone': 1,
			'local.skype': 1,
			'local.website':1,
			'local.feisbook': 1, 
			'local.textColumn':1, 
			'local.careerJob': 1,
			'local.summerJob': 1, 
			'local.partialJob': 1,
			'local.assignmentJob': 1, 
			'local.startupJob': 1, 
			_id: 1, 'local.userPhoto': 1, 
			'local.men': 1, 
			'local.knowledge': 1,
			'local.knowledge.knowledge' : 1,
			'local.projects.pic0 ': 1, 
			'local.projects.pic1': 1, 
		    'local.projects.pic2 ': 1, 
		    'local.projects.pic4 ': 1, 
		    'local.projects.pic5 ': 1, 
		    'local.projects.pic6 ': 1}, function(err, show){
			if(err) return console.log(err);
			res.render('index', {
				usersprofile: show,
				user: req.user
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
		if(req.files.thumbnail){
			req.user.local.userPhoto = "/images/"+req.user._id+"."+req.files.thumbnail.extension;
			// get the temporary location of the file
    		var tmp_path = req.files.thumbnail.path;
    		// set where the file should actually exists - in this case it is in the "images" directory
    		var target_path = './public/images/' + req.user._id+"."+req.files.thumbnail.extension;
    		// move the file from the temporary location to the intended location
    		fs.rename(tmp_path, target_path, function(err) {
        		if (err) throw err;
        		// delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        		fs.unlink(tmp_path, function() {
        		if (err) throw err;
        		});
    		});
		}
		req.user.local.textColumn = req.body.textColumn;
		req.user.local.website = req.body.website;
		req.user.local.feisbook = req.body.facebook;
		req.user.local.skype = req.body.skype;
		req.user.local.telephone = req.body.telephone;

		//Degrees 
		if(req.body.school) {
			req.user.local.degrees.school = req.body.school; 
			req.user.local.degrees.degree = req.body.degree; 
			req.user.local.degrees.education = req.body.education; 
			req.user.local.degrees.startDate = req.body.startDate; 
			req.user.local.degrees.endDate = req.body.finishDate; 
			req.user.local.degrees.statuss = req.body.statuss; 
		}
		 
		//Jobs 
		if(req.body.job) {
			req.user.local.job.job = req.body.job;
			req.user.local.job.jobName = req.body.jobName;
			req.user.local.job.jobPerc = req.body.jobPerc;
			req.user.local.job.jobStartDate = req.body.jobStartDate; 
			req.user.local.job.jobEndDate = req.body.jobEndDate; 
		}
 
		//Knowledge 
		if(req.body.knowledge) {
			req.user.local.knowledge.knowledge = req.body.knowledge; 
			req.user.local.knowledge.rateKnowledge = req.body.rateKnowledge;
		}
		


		if(req.files.projectspic0) {
			req.user.local.projects.pic0 = "/images/"+req.files.projectspic0.name;
			var tmp_path = req.files.projectspic0.path;
			var target_path = './public/images/'+req.files.projectspic0.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}
		if(req.files.projectspic1) {
			req.user.local.projects.pic1 = "/images/"+req.files.projectspic1.name;
			var tmp_path = req.files.projectspic1.path;
			var target_path = './public/images/'+req.files.projectspic1.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}
		if(req.files.projectspic2) {
			req.user.local.projects.pic2 = "/images/"+req.files.projectspic2.name;
			var tmp_path = req.files.projectspic2.path;
			var target_path = './public/images/'+req.files.projectspic2.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}
		if(req.files.projectspic3) {
			req.user.local.projects.pic3 = "/images/"+req.files.projectspic3.name;
			var tmp_path = req.files.projectspic3.path;
			var target_path = './public/images/'+req.files.projectspic3.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}
		if(req.files.projectspic4) {
			req.user.local.projects.pic4 = "/images/"+req.files.projectspic4.name;
			var tmp_path = req.files.projectspic4.path;
			var target_path = './public/images/'+req.files.projectspic4.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}
		if(req.files.projectspic5) {
			req.user.local.projects.pic5 = "/images/"+req.files.projectspic5.name;
			var tmp_path = req.files.projectspic5.path;
			var target_path = './public/images/'+req.files.projectspic5.name;
			// move the file from the temporary location to the intended location
		    fs.rename(tmp_path, target_path, function(err) {
		        if (err) throw err;
		        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
		        fs.unlink(tmp_path, function() {
		        	if (err) throw err;
		        });
		    });
		}	
		
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
    		title: 'About',
    		user: req.user
  		});
	});

	app.get('/forum', function(req, res) {
		Article.find({}, {'articleName':1, 
							'articleContent':1,
							'author':1,
							'authorId':1,
							'articleCommentAuthorId':1,
							'articleCommentAuthor':1,
							'articleComment':1},
						function(err, show){
							if(err) return console.log(err);
							res.render('forum', {
								title: 'Forum',
								allArticles: show,
								user: req.user
							});
						});
		
	});

	app.post('/forum', function(req, res, next) {	
		console.log(req.body);
		console.log(req.user.local.firstname);
		var userArticle = new Article();
		userArticle.save(function(err) {
			// we've saved the dog into the db here
			if (err) throw err;
			userArticle.authorId = req.user._id;
			userArticle.author = req.user.local.firstname +" "+ req.user.local.lastname;
			userArticle.articleName = req.body.articleName;
			userArticle.articleContent = req.body.articleContent;
			userArticle.save(function(err) {
				// we've updated the dog into the db here
				if (err) throw err;
			});
		});
		res.redirect('/forum');		
	});

	app.post('/comment', function(req, res, next) {	
		console.log(req.body);
		//Article.find({}, {'author':1});

		Article.findOne({ _id: req.body.id }, function (err, doc) {
			  if (err) throw err;
			  if(req.body.articleCommentAuthor) {
			  	doc.articleCommentAuthorId = req.body.articleCommentAuthorId+","+req.user._id;
			  	doc.articleCommentAuthor = req.body.articleCommentAuthor+","+req.user.local.firstname +" "+ req.user.local.lastname;
			  	doc.articleComment =  req.body.articleComment+","+req.body.comment.replace(","," ");
			  }
			  else {
			  	doc.articleCommentAuthorId = req.user._id;
			  	doc.articleCommentAuthor = req.user.local.firstname +" "+ req.user.local.lastname;
			  	doc.articleComment = req.body.comment.replace(","," ");	
			  }
			  
			  doc.save();
		})
		res.redirect('/forum');		
	});

	// Users
	app.get('/:id?', function(req, res) {
		var id = req.params.id;
		Test.find({_id: id}, {'local.firstname': 1, 'local.lastname': 1, 'local.birthday': 1, 'local.degrees':1,'local.job':1,'local.headline':1,'local.telephone': 1, 'local.skype': 1,'local.website':1,'local.feisbook': 1, 'local.textColumn':1, 'local.careerJob': 1, 'local.summerJob': 1, 'local.partialJob': 1,'local.assignmentJob': 1,'local.startupJob': 1, _id: 1, 'local.userPhoto': 1, 'local.men': 1, 'local.knowledge': 1, 'local.projects': 1, 'local.projects.pic0 ': 1, 'local.projects.pic1': 1,  'local.projects.pic2 ': 1, 'local.projects.pic4 ': 1, 'local.projects.pic5 ': 1, 'local.projects.pic6 ': 1, 'local.email': 1}, function(err, show){
			if(err) return console.log(err);
			res.render('users', {
				usersprofile: show,
				user: req.user
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

