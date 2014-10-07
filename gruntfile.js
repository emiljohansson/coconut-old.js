'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        dist: 'dist',
        test: 'test'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        pkg: grunt.file.readJSON('package.json'),

        // Empties folders to start fresh
        clean: {
            dist: {
                src: [
                    '<%= config.dist %>/*.js',
                    '<%= config.dist %>/*.css'
                ]
            }
        },

        concat: {
            dist: {
                src: [
                    '<%= pkg.name %>.prefix',
                    'src/coconut.js',
                    'src/unit/Entity.js',
                    'src/plugin/Plugin.js',
                    'src/**/*.js',
                    '<%= pkg.name %>.suffix'
                ],
                dest: '<%= config.dist %>/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= config.dist %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        // Mocha testing framework configuration options
        mocha: {
            test: {
                src: ['test/index.html'],
                options: {
                    run: true
                }
            }
        },

        watch: {
            scripts: {
                files: 'src/**/*.js',
                tasks: ['clean:dist', 'concat'],
                options: {
                    debounceDelay: 250,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', [
        'mocha',
        'clean:dist',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);


    grunt.registerTask('test', [
        'mocha'
    ]);
};
