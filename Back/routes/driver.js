const express = require('express');
const router =express.Router();
const Driver = require('../modules/driver');


router.route('/getbyid').post((req, res) => {
    let rty=req.body.rideType
    console.log(rty)
    Driver.findOne({rideType:rty}).exec(function(err, driver) {
        if (err)
            console.log(err);
        else{
            console.log(driver)
            res.json(driver)
        }
    });
});

router.post('/add',function(req,res){
    let  driver = new Driver(req.body);
    console.log(req.body);
    console.log(driver);
    driver.save()
        .then(issue => {
            res.status(200).json({'Driver': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});



module.exports =router;