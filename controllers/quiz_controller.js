//GET /quizes/question
//exports.question = function(req,res) {
//    res.render('quizes/question', {pregunta: 'Capital de Italia'});
//};

//GET /quizes/answer
//exports.answer = function(req,res) {
//    if (req.query.repuesta === 'Roma'){
//        res.render('quizes/answer', {respuesta: 'Correcto'});
//} else {
//        res.render('quizes/answer', {respuesta: 'Incorrecto'});
//    }
//};

//GET /author
exports.author = function(req,res) {
        res.render('author');
};

//Operaciones sobre BD
var models = require('../models/models.js');

// GET /quizes
exports.index = function(req, res) {
    models.Quiz.findAll().then(function(quiz) {
        res.render('quizes/index', { quiz: quiz})
    })
};

// GET /quizes/:id
exports.show = function(req, res) {
    models.Quiz.find(req.params.quizId).then(function(quiz) {
        res.render('quizes/show', { quiz: quiz})
    })
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
    models.Quiz.find(req.params.quizId).then(function(quiz) {
        if (req.query.respuesta === quiz.respuesta) {
            res.render('quizes/answer', {quiz: quiz, respuesta: 'Correcto'});
        } else {
            res.render('quizes/answer', {quiz: quiz, respuesta: 'Incorrecto'});
        }
    })
};


