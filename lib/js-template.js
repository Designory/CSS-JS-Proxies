'use strict';

module.exports = function(config){

	if (!config.baseUrl || !config.jsFilename) return config.reject();

	return `function addNewMainJsFile() {
    	var script = document.createElement('script');
    	script.type = 'text/javascript';
    	script.src = '${config.baseUrl}/${config.jsFilename}';
    	document.body.appendChild(script);
	}

	addNewMainJsFile();`;

};