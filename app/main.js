console.log("hello")

var app = angular
  .module("nashvilleApp", ['ngRoute', 'googlechart'])
  .config(($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: "ResourceCtrl",
      templateUrl: "partials/resources.html"
    })
    .when('/contact', {
      controller: "ContactCtrl",
      templateUrl: "partials/contact.html"
    })
  })
  .controller('ResourceCtrl',  function($scope, getFactory){

    $scope.chartObject = {
              type: "BarChart",
              data: {
                  "cols": [
                      { id: "t", label: "Type of Service", type: "string" },
                      { id: "s", label: "Number of Providers", type: "number" }
                  ], "rows": [] //You'll be adding the rows with addChartRow
              },
              options: {
                  title: "Nashville Services"
              }
          }



    getFactory
    .getData()
    .then((e)=>{
      for(var key in e) {
        console.log("key", key)
        console.log("e", e[key])
          var chartDatum = {
          c: [
              { v: [key] },
              { v:  e[key]}
            ]
          };
          $scope.chartObject.data.rows.push(chartDatum);

         } //end of for loop
        })






  })
  .factory('getFactory', function($http){
    return {
      getData : ()=> {
        return $http
          .get("https://data.nashville.gov/resource/8zc7-2afq.json")
          .then((e)=>{
            console.log("response from call", e.data);
            return e.data
          })
          .then((e)=>{
            obj = {}
            for(var i = 0; i< e.length; i++) {
              let contact_type = e[i].contact_type
              console.log("e[i].contact_type", e[i].contact_type)
              if(obj[contact_type]) {
                obj[contact_type] += 1;
              } else {
                obj[contact_type] = 1
              }
            }
            console.log(obj)
            return obj
          })
        }
    }


  })
  .factory('countFactory', function(){
    return {
      countData : (e)=>{

      }
    }
  })
