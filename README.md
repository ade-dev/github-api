## AngularJS application - Search GitHub API by username

This application uses an unauthenticated API request, GitHub sets a cap of 60 requests per hour

### Application directory structure

    app/                          --> Files used in production
      css/                        --> CSS folder
        master.css                --> Default stylesheet compiled from master.scss
        vendor/
          bootstrap.css
      js/                         --> JavaScript folder
        app.js                    --> Main application module
        controllers.js            --> Application controller
        services.js               --> HTTP service
        vendor/
          angular.min.js
          jQuery-1.9.0.min.js
      sass/                       --> SASS folder
        master.scss               --> Main SASS file, compiled to master.css
      partials                    --> angular view partials folder
        url-list.html             --> Repository list HTML template
      index.html                  --> Main HTML template


