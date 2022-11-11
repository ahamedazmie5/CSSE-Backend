const mongoose = require("mongoose");
//Time Tables details
const TimeTablesSchema = new mongoose.Schema({
    Bus_ID:{
        type: String,
        required: true,
    },
	Route: {
		type: String,
		required: true,
	},
	Start_Time: {
		type: String,
		required: true,
	},
	End_Time: {
		type: String,
		required: true,
	},
	Bus_Number: {
		type: String,
		required: true,
		unique: true,
	},
	
    },
    {
        timestamps:true,
    },
);

module.exports = User = mongoose.model("timetables", TimeTablesSchema);


