module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      css: {
        src: 'assets/css/',
        dest: 'assets/css/'
      },
      js: {
        src: 'assets/js/',
        dest: 'assets/js/'
      }
    },

    concat: {
      basic: {
        src: ['<%= dirs.css.src %>styles.css', 'vendor/reset/reset.css'],
        dest: 'vendor/reset/test.css'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true,
        sourceMapName: 'sourcemaps/uglify.map'
      },

      my_target: {
        files:{
          '<%= dirs.js.src %>myscript.mini.js': ['<%= dirs.js.src %>canvas_menu.js','<%= dirs.js.dest %>myscript.js']
        }
      },
      all_mini: {
        files:
        {
          expand: true,     // Enable dynamic expansion.
          cwd: 'assets/js/',      // Src matches are relative to this path.
          src: ['**/*.js'], // Actual pattern(s) to match.
          dest: 'assets/js/',   // Destination path prefix.
          ext: '.min.js',   // Dest filepaths will have this extension.
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify:my_target','concat']);

};
