var express = require('express');
var router = express.Router();

router.get('/:ids([0-9]{5})', function(req, res){
	res.send('GET route on things.');
	console.log(req.params);
});

router.post('/', function(req, res){
	res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
