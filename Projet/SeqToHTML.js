// Do whatever you want
// initialize variables
// declare functions
// load modules
// etc
let pos, size;
let range = [0,32];

module.exports = {

	init: function(){
			// this will be executed once when the osc server starts
	},

	oscInFilter:function(data){
			// Filter incoming osc messages

			var {address, args, host, port} = data

			// do what you want

			// address = string
			// args = array of {value, type} objects
			// host = string
			// port = integer

			// return data if you want the message to be processed
			return {address, args, host, port}

	},

	oscOutFilter:function(data){
			// Filter outgoing osc messages

			var {address, args, host, port, clientId} = data

			// same as oscInFilter
			if (address === '/seq_file_open') {

				console.log("yo");
	
			}

			// return data if you want the message to be and sent
			return {address, args, host, port}
	},

	unload: function(){
		console.log("reloading!");
			// this will be executed when the custom module is reloaded
	},

}