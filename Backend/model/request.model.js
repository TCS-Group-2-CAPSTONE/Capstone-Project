const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	employeeEmail: {
		type: String,
		required: true
	},
	resolved: {
		type: Boolean,
		required: true
	},
	action: {
		type: String,
		required: true
	},

	
});

module.exports = PromoCode = mongoose.model('Request', requestSchema);