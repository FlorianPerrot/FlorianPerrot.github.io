module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    update: true
                },
                files: {
                    "assets/css/styles.css": "assets/sass/styles.sass"
                }
            }
        },
        concat: {
            dist: {
                src: ['assets/js/canvas_menu.js', 'assets/js/myscript.js'],
                dest: 'assets/js/concat.js',
            }
        },
        watch: {
            styles: {
                files: ['assets/sass/*.sass', "index.html"],
                tasks: ['sass:dist'],
            },
            scripts: {
                files: ['assets/js/myscript.js', 'assets/js/canvas_menu.js'],
                tasks: ['concat:dist'],
            },
            options: {
                livereload: true
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass:dist']);
}
