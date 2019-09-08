const mongoose =require('mongoose');
const Schema =mongoose.Schema;


let DriverSchema = new Schema({
    vehicalID:{
        type: String,
    },
    driverName: {
        type: String,
        //required:[true,"Required"]
    },
    mobileNo: {
        type: String,
        //required:[true,"Required"]
    },
    driverRating: {
        type: Number,
        //required:[true,"Required"]
    },
    rideTypeID:{
        type: String,
    }
});

const Driver =mongoose.model('driver',DriverSchema);
module.exports = Driver;