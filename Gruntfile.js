
module.exports = function(grunt) {
    grunt.initConfig({
        
        // compiles js modules into single file
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {
                            presets: ['es2015']
                        }]
                    ],
                    watch: true,
                    livereload: true,
                    browserifyOptions: {
                        debug: true // source mapping
                    },
                },
                files: {
                    'js/build/main.js': ['js/*.js']
                }
            }
        },
      
        concat: {
            'js/build/MIDI.js': [
//              'js/color/spaceW3.js', // optional
               
                'js/midi/audioDetect.js',
                'js/midi/gm.js',
                'js/midi/loader.js',
                'js/midi/plugin.audiotag.js',
                'js/midi/plugin.webaudio.js',
                'js/midi/plugin.webmidi.js',
//              'js/midi/synesthesia.js', // optional
                'js/util/dom_request_xhr.js', // req when using XHR
                'js/util/dom_request_script.js', // req otherwise
                 'inc/shim/Base64binary.js',
                'inc/shim/WebAudioAPI.js'
//              'js/widget/loader.js', // optional
               
            ]
        },




        // Run local server on specified port
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            }
        },

        // Watch files for changes, execute tasks when change happens
        watch: {
            sass: {
                files: ['sass/*.scss'],
                files: ['sass/**/*.scss'],
                tasks: 'sass',
                options: {
                    livereload: true
                }
            },
            browserify: {
                files: ['js/build/*.js'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['*.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Where we tell Grunt what plugins we are going to use
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-concat');


    // Where we tell Grunt what to do when we type a command into the terminal
    grunt.registerTask('cssmin', ['cssmin']);
    grunt.registerTask('build', ['concat']);

    grunt.registerTask('serve', ['connect:server', 'browserify', 'watch']);
    grunt.registerTask('default', ['watch']);

};