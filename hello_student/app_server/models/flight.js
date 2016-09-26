var mongoose = require('mongoose');

var Flaps5Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});


var ClimbTable = new mongoose.Schema ({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number
})

var FlapsTable = new mongoose.Schema ({
	flap: Number,
	weight: 
})


var LandingTable = new mongoose.Schema ({
	flap: String
	weight: Number
	vapp: Number
	vref: Number
	vga: Number
})