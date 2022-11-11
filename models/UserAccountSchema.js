const mongoose = require("mongoose");
//User Account details
const UserAccountSchema = new mongoose.Schema({

    First_Name:{
        type: String,
        required: true,
    },
	Last_Name: {
		type: String,
		required: true,
	},
	NIC: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
	},
	Contact: {
		type: String,
		required: true,
		unique: true,
	},
    Address: {
		type: String,
		required: true,
		
	},
	
    },
    {
        timestamps:true,
    },
);

module.exports = User = mongoose.model("useraccount", UserAccountSchema);


