const express = require('express');
const router =express.Router();
const Taxi=require('../modules/taxi');

router.route('/get').post((req, res) => {
    Taxi.find((err, taxi) => {
        console.log(req.body.distance)
        if (err)
            console.log(err);
        else{
            //console.log(item);
            taxi.forEach(element => {
                element.waitingTime=randTime(); 
                element.amount=calAmount(req.body.distance,element.price.baseRate,element.price.perKm,element.price.baseKm);
                //console.log(taxi);
              });
            res.json(taxi);
        }
    });
});

function calAmount(distance,baserate,perKm,baseKm){
    if(distance<baseKm)
        return ("Rs."+baserate.toString()+"/=");
    else{
    console.log("Distance:",distance,"|basekm",baseKm,"|perKm:",perKm)    
    var z=(baserate+((distance-baseKm)*perKm)).toFixed(2);
    return ("Rs."+z.toString()+"/=");
    }
}

router.route('/getf').get((req, res) => {
    Taxi.find((err, taxi) => {
        if (err)
            console.log(err);
        else
            res.json(taxi);
    });
});


router.post('/add',function(req,res){
    let  taxi = new Taxi(req.body);
    console.log(req.body);
    console.log(taxi);
    taxi.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

function randTime(){
    var x=Math.floor(Math.random() * Math.floor(30));
    x=x+3;
    if(x>25)
        return "Not Available";
    else
        return (x.toString()+" mins");
}

module.exports =router;