'use strict';

const fs = require('fs');
const shell = require('shelljs');
const event = require("events").EventEmitter;
const cssTemplate = require('./css-template');
const jsTemplate = require('./js-template');
const getShellCommand = require('./shell-command.js');

let Templatize = function(){
	// initialize the prototype
};

Templatize.prototype.init = function(config) {

	Object.assign(this, config);

	this.write = new event();
 
	return this;

};

Templatize.prototype.populate = function() {

	let cssCommand = getShellCommand(this.directory, cssTemplate(this), this.cssFilename);
	let jsCommand = getShellCommand(this.directory, jsTemplate(this), this.jsFilename);

	shell.exec(`${cssCommand} && ${jsCommand}`, {silent:true}, () => {
		console.log('execb');
		this.write.emit("written");
	});
	
	return this;

};


Templatize.prototype.onComplete = function(callback) {

	this.write.on("written", function () {
   		
   		if (callback) callback();
	
	});

	return this;

};

function oncompleteHelper(callback){

}

module.exports = new Templatize();