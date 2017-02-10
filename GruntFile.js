module.exports = function (grunt){
    grunt.initConfig({
       jasmine: {
           pivotal:{
               src: 'js/*.js',
               options: {
                   specs: 'spec/*.js'        
               }
           }
        },
        sass:{
            dist:{
                options:{
                    style: 'expanded'
                },
                files:{
                    'css/main.css':'sass/main.scss'
                }
            }
            
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default','jasmine');
    grunt.registerTask('default','sass');
};