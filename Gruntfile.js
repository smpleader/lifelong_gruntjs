"use strict";

module.exports = function (grunt) {

  const n_sass = require('node-sass');
  // Load all Grunt tasks that are listed in package.json automagically
  require("load-grunt-tasks")(grunt);  

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    // This is where our tasks are defined and configured

    // Grunt Sass
    sass: {
      options: {
        implementation: n_sass,
        sourceMap: false
      },
      dist: {
        files: {
          "public/css/style.css": "src/scss/index.scss"
        }
      }
    },

    // Grunt contrib concat
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        // Files are liste this way to be commented out if they are not needed!
        src: [
          'src/js/jquery/*.js',
          'src/js/bootstrap/bootstrap.min.js',
          'src/js/custom/*.js'
        ],
        dest: 'public/js/scripts.js',
      },
    },

    // Grunt contrib uglify
    uglify: {
      dist: {
        files: {
          'public/js/scripts.min.js': 'public/js/scripts.js'
        }
      }
    },

    // Grunt contrib watch
    watch: {
      sass: {
        files: "src/scss/**/*.scss",
        tasks: ["sass"]
      },
      concat: {
        files: "src/js/**/*.js",
        tasks: ["concat"]
      }
    },

    // Grunt BrowserSync
    browserSync: {
      dev: {
        bsFiles: {
          src : ["**/*.html", "public/js/*.js", "public/images/*.*","public/content/*.*", "public/css/*.css"]
        },
        options: {
          watchTask: true,
          server: "public"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-sass');

  // Custom tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('install', ['sass', 'concat','uglify']);
  grunt.registerTask('test', ['concat','uglify']);//

};
