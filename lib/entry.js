'use strict';

const fs = require('fs');
const templatize = require('./templatize');

module.exports = function(config){

	let promise = new Promise(function(resolve, reject) {

	    config.reject = reject;

	    templatize
	    	.init(config)
	    	.populate()
	    	.onComplete(function(){

	    		resolve();

	    	});
  	
	});

	promise.then(function(result) {
  		
  		if (config.callback) config.callback();
	
	}, function(err) {
  		
  		console.log(err);
	
	});

}




