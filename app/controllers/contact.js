app.controller('ContactCtrl',  function($scope, getFactory){
    //go get the data
    getFactory
    .getContacts()
    .then((e)=>{
      //assign the data to the scope object contactList
      $scope.contactList = e;

    })
  })
