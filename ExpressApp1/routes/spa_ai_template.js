'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res)){
    res.render('spa_ai_template', { title: 'spa template' });
}


router.get('/:var', function (req, res) {
    const variable = req.params.var;
    res.render('spa_ai_template_' + variable, { title: 'spa template ' + variable });  
});

module.exports = router;
