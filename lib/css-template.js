'use strict';

module.exports = function(config){

	if (!config.baseUrl || !config.cssFilename) return config.reject();

	return `@import '${config.baseUrl}/${config.cssFilename}';`;

};