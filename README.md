Yeoman + Bower + Angular + Scafold + Grunt + Karma + Jashmin + Istanbul + PhantomJS


  cd setup/ 
  968  node --version && npm --version 
  969  npm update 
  970  node --version && npm --version 
  971  npm install --global npm@latest 
  972  sudo chmod 777 -R /home/your-pc/tmp/ 
  973  sudo npm install --global npm@latest 
  974  git --version 
  975  npm install --global yo bower grunt-cli 
  976  sudo npm install --global yo bower grunt-cli 
  977  yo --version && bower --version && grunt --version 
  978  npm install --global generator-angular@0.11.1 generator-karma 
  979  sudo npm install --global generator-angular@0.11.1 generator-karma 
  980  mkdir mytodo && cd mytodo 
  981  yo 
  982  grunt serve 
  983  cd .. 
  984  grunt serve 
  985  cd mytodo/ 
  986  grunt serve 
  987  grunt serve --force 
  988  bower install 
  989  grunt serve --force 
  990  sudo bower install 
  991  bower install --allow-root   
  993  sudo bower install --allow-root   
 1000  karma 
 1001  npm install --global karma --save-dev 
 1002  sudo npm install --global karma --save-dev 
 1007  npm install karma --save-dev 
 1008  karma 
 1009  grunt test --force 
 1010  grunt test 
 1011  karma 
 1012  karma start 
 1013  grunt test 
 1014  cd test/ 
 1015  grunt test 
 1016  karma start karma.conf.js 
 1017  npm install karma-phantomjs-launcher --save-dev 
 1018  karma start karma.conf.js 
 1019  npm install karma-jasmine --save-dev 
 1020  karma start karma.conf.js 
 1021  cd .. 
 1022  grunt 
 1023  karma start 
 1024  karma start test/karma.conf.js 
 1025  npm install karma-phantomjs-launcher --save-dev 
 1026  npm install karma-jasmine --save-dev 
 1027  grunt 
 1028  grunt serve:dist 
 1029  grunt serve:dist --force 
 1030  bower install --save angular-local-storage 
 1031  sudo bower install --save angular-local-storage --allow-root 
 1032  grunt serve


Package.json should have :

    "grunt-karma": "^0.10.1",
  
    "karma": "^0.12.31",
    "karma-chrome-launcher": "^0.2.0",
    "karma-coverage": "^0.3.1",
    "karma-firefox-launcher": "^0.1.6",
    "karma-jasmine": "^0.3.5",
    "karma-mocha-reporter": "^1.0.4",
    "karma-phantomjs-launcher": "^0.1.4",
    "phantomjs-prebuilt": "~2.1.7",
    "karma-phantomjs-launcher": "~1.0.0",
    "jasmine-core": "~2.4.1"

Karma.conf.js file should have : 

// Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

  
    

    reporters: ['progress', 'coverage'],  
    preprocessors: {  
      'app/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {  
      type: 'html',
      dir: 'coverage'
    },
