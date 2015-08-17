	module.exports = function  (grunt) {
	var config = {};


	//all tasks that must be loaded.
	var tasks = [
			
			'grunt-contrib-watch'
			,'grunt-contrib-uglify'
		
	];


	//uglify ===============================
		config.uglify = {dist: {
			options: {sourceMap:"public/myapp.production.js.map"}
			,files: {
				"public/myapp.production.js": ["public/myapp.development.js"]
			}
		}}


	//Watch ===============================

	config.watch = {
		 scripts: {
		 	files: ["lib/**/*.js","scss/**/*.scss"]
		 	,tasks: ["dist"]
		 }
	}


	

	//Register custom tasks ===============================
	grunt.registerTask('default',['dist']);
	//grunt.registerTask('dev',['jshint:dev','jasmine', 'concat:dev', 'sass:dev']);
	grunt.registerTask('dist',['uglify']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};