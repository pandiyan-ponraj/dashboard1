module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			options: {
				seperator : "\n\n"
			},
			css:{
				src : ['dev/angular-material/angular-material.min.css','dev/bootstrap/dist/css/bootstrap.min.css', 'dev/bootstrap/dist/css/bootstrap-theme.min.css','dev/css/*.css'],
				dest : 'build/css/main.css'
			},
			js:{
				src : ['dev/angular/angular.min.js', 'dev/angular-animate/angular-animate.min.js', 'dev/angular-aria/angular-aria.min.js','dev/angular-messages/angular-messages.min.js', 'dev/angular-material/angular-material.min.js','dev/jquery/dist/jquery.min.js','dev/bootstrap/dist/js/bootstrap.min.js', 'dev/js/*.js'],
				dest: 'build/js/main.js'
			}
		},
		cssmin: {
			css: {
	            src: 'build/css/main.css',
	            dest: 'build/css/main.min.css'
	        }
	    },
	    uglify: {
	    	js: {
	    		src: 'build/js/main.js',
                dest: 'build/js/main.min.js'
            }
        },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['concat', 'cssmin', 'uglify']);
};