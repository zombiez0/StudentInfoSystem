module.exports = function(app, router, StudentSchema) {
	router.get('/students', function(req, res) {
		res.json({ message : 'Message from service'});
	});
}