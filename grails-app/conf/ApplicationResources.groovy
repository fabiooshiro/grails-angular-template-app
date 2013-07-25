modules = {
    application {
        resource url:'js/application.js'
    }

    angular {
    	resource url:'js/angular.min.js'
    }

    myAngularApp {
    	dependsOn 'jquery, angular, grails-angular-template'
    	resource url:'js/myAngularApp.js'
    }
}