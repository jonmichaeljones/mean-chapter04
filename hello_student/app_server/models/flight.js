var mongoose = require('mongoose');

var Flaps5Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var Flaps10Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var Flaps15Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});