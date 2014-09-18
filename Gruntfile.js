"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            isNumber: {
                src: ['src/isNumber.js', 'src/array/*.js'],
                options: {
                    specs: 'test/*.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'test/*.js'],
                tasks: ['jasmine']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['jasmine']);
};
