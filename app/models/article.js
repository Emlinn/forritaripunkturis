
var mongoose = require('mongoose');
var articleSchema = mongoose.Schema({
	author         		   : String,
	authorId         	   : String,
	articleName    		   : String,
	articleContent 		   : String,
	articleCommentAuthor   : String,
	articleCommentAuthorId : String,
	articleComment 		   : String
});

// Býr til model fyrir article og notar í app
module.exports = mongoose.model('Article', articleSchema);