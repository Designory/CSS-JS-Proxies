'use strict';

module.exports = function(directory, template, filename){


	return `mkdir -p ${process.cwd()}/${directory} && echo "${template}" > ${process.cwd()}/${directory}/${filename}`;

};