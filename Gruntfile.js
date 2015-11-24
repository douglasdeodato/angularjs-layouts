	module.exports = function (grunt) {
	var config = {};


	//all tasks that must be loaded.
	var tasks = [
			'grunt-contrib-watch'
			,'grunt-contrib-uglify'
			,'grunt-contrib-jade'
			,'grunt-contrib-concat'
		
	];

	//Concat ===============================
		var concat;
		config.concat = concat = {};

		concat.dev = {
			files: {
				"public/javascripts/myapp-controllers.development.js": [
					//for all"public/javascripts/**/*.js"
/* just controllers */ "public/javascripts/controllers/**/*.js"
				]
			}
		};



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
				 	files: ["lib/**/*.js","sass/**/*.scss","jade/**/*.jade"]
				 	,tasks: ["dist"]
				 }
			}
	
	//Jade ===============================
			config.jade = {
			        compile: {
			            options: {
			                client: false,
			                pretty: true
			            },
			            files: [ {
			              cwd: "jade/templates",
			              src: "**/*.jade",
			              dest: "",
			              expand: true,
			              ext: ".html"
			            } ]
			        }
			    }

	//Register custom tasks ===============================
	grunt.registerTask('default',['dev','concat']);
	//grunt.registerTask('dev',['jshint:dev','jasmine', 'concat:dev', 'sass:dev']);
	grunt.registerTask('dist',['uglify','jade']);


	//General setup ===============================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);

};