var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('account/indexx.pug');
});

router.post('/login', function(req, res, next) {
    var db=req.db;
    var accountTable=db.get('user');
    
    accountTable.findOne({$and:[{username:req.body.username},{password:req.body.password}]},{},function(errors,user){
      if(user != null)
        {
          req.session.username = req.body.username;
          res.render('account/welcom.pug');

        }
        else
        {
             var data= { msg :'Invalid Account' }
             res.render('account/indexx.pug',data);           
            
        }
    });
    

   
    
});

module.exports = router;
