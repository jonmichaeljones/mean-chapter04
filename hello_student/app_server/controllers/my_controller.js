module.exports.showStudentName = function(req, res) {
  res.render('index', { firstName: 'Jon Michael', lastName: 'Jones'});
};