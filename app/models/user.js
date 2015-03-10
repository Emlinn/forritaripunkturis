// app/models/user.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Database Schema fyrir user models
var userSchema = mongoose.Schema({
	local			: {
		email		: String,
		password	: String,
		firstname	: String,
		lastname	: String,
		birthday	: String,
		textColumn	: String,
		men			: String,
		women		: String,
		website		: String,
		feisbook	: String,
		skype		: String,
		telephone	: String,
		degrees		: {
					school	 : String,
					degree 	 : String,
					education: String,
					startDate: String,
					endDate  : String,
					statuss	 : String 
					}, 
		careerJob	: String,
		summerJob	: String,
		partialJob 	: String,
		assignmentJob : String,
		startupJob	: String,
		job 		: {
					job 	: String,
					jobName : String,
					jobPerc : String,
					jobStartDate : String,
					jobEndDate   : String
					},
		knowledge	: {
					knowledge    : String,
					rateKnowledge: String
					},
		userPhoto	: String,
		thumpnail	: {
					fieldname	: String,
					originalname: String,
					encoding	: String,
					mimetype	: String,
					extension	: String,
					size		: String,
					truncated	: String,
					buffer		: String 
					},
		projects	: {
					pic0 : String,
					pic1 : String,
					pic2 : String,
					pic3 : String
		}


	}
});

// Aðferðir
// GenerateHash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Checkar ef password er valid
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// Býr til model fyrir user og notar í app
module.exports = mongoose.model('User', userSchema);