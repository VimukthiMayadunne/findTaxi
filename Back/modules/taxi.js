const mongoose =require('mongoose');
const Schema =mongoose.Schema;


let TaxiSchema = new Schema({
    rideTypeId:{
        type: String,
    },
    rideType: {
        type: String,
        //required:[true,"Required"]
    },
    vehicalType:{
        type:String,
    },
    company: {
        type: String,
        //required:[true,"Required"]
    },
    price:{
        baseRate:{
            type: Number
        },
        perKm:{
            type: Number
        },
        baseKm:{
            type: Number
        }
    },
    amount:{
        type: String,
        default:null
    },
    waitingTime: {
        type: String,
        default :"12 mins"
    }
});

const Taxi =mongoose.model('taxi',TaxiSchema);
module.exports = Taxi;