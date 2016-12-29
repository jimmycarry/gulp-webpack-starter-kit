var express = require('express');
var router = express.Router();
var path = require('path');

const defaultJson = {
    "status": 200,
    "code": 0,
    "message": "success"
}

router.get('/*', function(req, res, next) {
    if (req.url.split('/')[1] == 'api') {
        next();
    } else if (req.url.split('/')[1] == 'sign') {
        res.sendFile(path.join(__dirname, './src' + req.url));
    } else {
        console.log(req.url);
        console.log(path.join(__dirname, './src/index.html'));
        res.sendFile(path.join(__dirname, './src/index.html'));
    }
}).post('/api/login',function (req,res,next) {
    console.log(req);
    setTimeout(()=>{
        res.json({
            message:'登录成功',
            status:200
        });
    },2000)

});
module.exports = router;