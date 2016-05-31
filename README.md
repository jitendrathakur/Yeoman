
Setup instructions: 
npm install
bower install
grunt serve
Enjoy....

If you want to setup this project from scratch then do following instructions :

Yeoman + Bower + Angular + Scafold + Grunt + Karma + Jashmin + Istanbul + PhantomJS

  node --version && npm --version 
  
  npm update 
  
  node --version && npm --version 
  
  npm install --global npm@latest 
  
  sudo chmod 777 -R /home/your-pc/tmp/ 
  
  sudo npm install --global npm@latest 
  
  git --version 
  
  npm install --global yo bower grunt-cli 
  
  sudo npm install --global yo bower grunt-cli 
  
  yo --version && bower --version && grunt --version 
  
  npm install --global generator-angular@0.11.1 generator-karma 
  
  sudo npm install --global generator-angular@0.11.1 generator-karma 
  
  mkdir mytodo && cd mytodo 
  
  yo 
  
  grunt serve 
  
  cd .. 
  
  grunt serve 
  
  cd mytodo/ 
  
  grunt serve 
  
  grunt serve --force 
  
  bower install 
  
  grunt serve --force 
  
  sudo bower install 
  
  bower install --allow-root  
  
  sudo bower install --allow-root  
  
  karma 
  
  npm install --global karma --save-dev 
  
  sudo npm install --global karma --save-dev 
  
  npm install karma --save-dev 
  
  karma 
  
  grunt test --force 
  
  grunt test 
  
  karma 
  
  karma start 
  
  grunt test 
  
  cd test/ 
  
  grunt test 
  
  karma start karma.conf.js 
  
  npm install karma-phantomjs-launcher --save-dev 
  
  karma start karma.conf.js 
  
  npm install karma-jasmine --save-dev 
  
  karma start karma.conf.js 
  
   cd .. 
   
   grunt 
   
   karma start 
   
   karma start test/karma.conf.js
   
   npm install karma-phantomjs-launcher --save-dev 
   
   npm install karma-jasmine --save-dev 
   
   grunt 
   
   grunt serve:dist 
   
   grunt serve:dist --force 
   
   bower install --save angular-local-storage 
   
   sudo bower install --save angular-local-storage --allow-root 
   
   grunt serve


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
