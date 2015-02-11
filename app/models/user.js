// app/models/user.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Database Schema fyrir user models
var userSchema = mongoose.Schema({
	local			: {
		email		: String,
		password	: String,
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