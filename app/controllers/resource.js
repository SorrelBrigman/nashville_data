app.controller('ResourceCtrl',  function($scope, getFactory){

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
    .getService()
    .then((e)=>{
      for(var key in e) {
        //takes object from factory and separated the key and values
          var chartDatum = {
          c: [
          //key equals the type of service
              { v: [key] },
          //e[key] equals the number of that type of service
              { v:  e[key]}
            ]
          };
          $scope.chartObject.data.rows.push(chartDatum);

         } //end of for loop
        })

  })
