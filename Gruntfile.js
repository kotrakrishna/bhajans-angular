module.exports = function (grunt) {
    // http://www.sitepoint.com/writing-awesome-build-script-grunt/	 
    // configure the tasks
    grunt.initConfig({

        copy: {
            build_src: {
                cwd: 'src',
                src: [ '**' ],
                dest: 'build',
                expand: true
            },
            build_bower_components: {
                cwd: 'bower_components',
                src: [
                    'html5-boilerplate/css/normalize.css',
                    'html5-boilerplate/css/main.css',
                    'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap/dist/css/bootstrap-theme.min.css',
                    'html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
                    'angular/angular.js',
                    'angular-route/angular-route.js',
                    'angular-bootstrap/ui-bootstrap-tpls.min.js'
                ],
                dest: 'build/bower_components',
                expand: true
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'build',
                    hostname: 'localhost'
                }
            }
        },

        watch: {
            copy: {
                files: [ 'src/**' ],
                tasks: [ 'build' ]
            }
        }

    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define the tasks
    // define the tasks
    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean', 'copy' ]
    );

    grunt.registerTask(
        'default',
        'Watches the project for changes, automatically builds them and runs a server.',
        [ 'build']
//        [ 'build', 'connect', 'watch' ]
    );
};
