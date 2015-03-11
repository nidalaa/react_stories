module.exports = function(grunt) {

  grunt.initConfig({});

  grunt.config( 'sass', {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles/',
          src: ['*.sass'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    }
   );

  grunt.loadNpmTasks('grunt-contrib-sass');

};