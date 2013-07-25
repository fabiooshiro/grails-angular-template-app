var myAngularModule = angular.module('myApp', ['grails-angular-template']); 
// just that an all the code inside the grails-angular-template
// module is available to your module in that case 'myApp'

//let's define a controller  
function myController($scope, templateService){
	$scope.users = [{username: 'bruno'}, {username: 'oshiro'}];
	$scope.txt = "teste";
    templateService.load('/user/template1').into('section.someSection').withData({scope: $scope.$new(), txt2: 'teste'}).start();
    templateService.load('/user/template2').into('nav.someNav').start();
}

function UserEditController($scope){
	console.log($scope.txt2);
}

function UserShowController($scope){
	console.log($scope.txt2);
}

function UserController($scope){
	console.log($scope.txt);
	$scope.save = function(){
		console.log("saving " + $scope.user.username);
	}
}
