'use strict';

var express = require('express'),
		port = 3002,
	  posts = require('./mock/posts.json'),
		postsList = Object.keys(posts).map(function(value){
	return posts[value];
});

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
	// req.path ex: a req to '/blog' or '/'
	var path = req.path;
	// res.locals stores variables that will be accessible in the template
	res.locals.path = path;
	res.render('index');
});

app.get('/blog/:title?', function(req, res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.render('blog', {posts: postsList});
	} else {
		var post = posts[title] || {};
		res.render('post', {post: post});
	}
});

app.listen(port, function() {
	console.log("The frontend server is running on " + port + "!");
});
