
//app is my new angular app
var app = angular
//named "nashvilleApp", with ngRoute and googlechart as dependencies
  .module("nashvilleApp", ['ngRoute', 'googlechart'])
  //use $routeProvider to configure
  .config(($routeProvider) => {
    $routeProvider
    //when at '/', show the resource chart
    .when('/', {
      controller: "ResourceCtrl",
      templateUrl: "partials/resources.html"
    })
    //when at '/contacts', show the contacts table
    .when('/contacts', {
      controller: "ContactCtrl",
      templateUrl: "partials/contact.html"
    })
  })
