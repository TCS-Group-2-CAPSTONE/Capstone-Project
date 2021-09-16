const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	action: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	
});

module.exports = PromoCode = mongoose.model('Request', requestSchema);