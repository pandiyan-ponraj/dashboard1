module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			options: {
				seperator : "\n\n"
			},
			css:{
				src : ['dev/bootstrap/dist/css/bootstrap.min.css','dev/Yamm3/yamm/yamm.css','src/css/*.css'],
				dest : 'build/css/main.css'
			},
			js:{
				src : ['dev/angular/angular.js','dev/jquery/dist/jquery.min.js','dev/bootstrap/dist/js/bootstrap.min.js', 'src/js/*.js'],
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