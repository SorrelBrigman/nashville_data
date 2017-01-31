app.factory('getFactory', function($http){
    return {
      getService : ()=> {
        //go get the data
        return $http
          .get("https://data.nashville.gov/resource/8zc7-2afq.json")
          .then((e)=>{
            //return the data object
            return e.data
          })
          //take the data object
          .then((e)=>{
            //create an empty object
            obj = {}
            for(var i = 0; i< e.length; i++) {
              //for the new object set the type of service as the keys
              let contact_type = e[i].contact_type
              //when the service comes up again, add one to the values
              if(obj[contact_type]) {
                obj[contact_type] += 1;
                //if the service hasn't been created as an object key yet
                //create it as an object key and set the initial value to one
              } else {
                obj[contact_type] = 1;
              }
            }
            //return the object of services as the keys with the
            //count of said services as the value
            return obj
          })
        },

    getContacts : ()=> {
        return $http
        //go get the data
          .get("https://data.nashville.gov/resource/8zc7-2afq.json")
          .then((e)=>{
            //return the data object
            return e.data
          })
        } //end of getContacts()
    }//end of factory object

})// end of factory
