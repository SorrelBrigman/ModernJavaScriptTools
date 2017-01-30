console.log("hello world");


console.log("Here I am to save the day!");

let cpt = "captain America";


console.log(cpt)
;//a node thing:
module.exports = (grunt)=> {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed',
        },
        dist: {
            files: {
                'styles/main.css': 'styles/main.scss'
            }
        }
    },
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass'],

      },
    },
    uglify: {
      options: {
        mangle: false
        },
      my_target: {
        files: {
          'output.min.js': ['script.js', 'Gruntfile.js']
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['script.js', 'Gruntfile.js'],
        dest: 'dist/built.js',
      },
    },
    jshint: {
      beforeconcat: ['script.js', 'Gruntfile.js'],
      afterconcat: ['dist/built.js']
    }
  });


  // Load the grunt plugins
  //what tasks we want to load
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  //declare what taskes we want to run
  grunt.registerTask('default', ['sass']);

};
