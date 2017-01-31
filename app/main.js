console.log("hello")

var app = angular
  .module("nashvilleApp", ['ngRoute', 'googlechart'])
  .config(($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: "ResourceCtrl",
      templateUrl: "partials/resources.html"
    })
    .when('/contacts', {
      controller: "ContactCtrl",
      templateUrl: "partials/contact.html"
    })
  })
.controller('ContactCtrl',  function($scope, getFactory){
    console.log("Contact controller")

    getFactory
    .getContacts()
    .then((e)=>{
      $scope.contactList = e;
      console.log(e)
    })
  })
