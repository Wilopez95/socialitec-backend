const express  = require ('express');
const router = express.Router();


router.get('/',(req, res, next) => {
    res.render('backoffice.html');
});




module.exports = router;