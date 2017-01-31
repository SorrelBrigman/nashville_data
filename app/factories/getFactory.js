app.factory('getFactory', function($http){
    return {
      getService : ()=> {
        return $http
          .get("https://data.nashville.gov/resource/8zc7-2afq.json")
          .then((e)=>{
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

            return obj
          })
        },

    getContacts : ()=> {
        return $http
          .get("https://data.nashville.gov/resource/8zc7-2afq.json")
          .then((e)=>{

            return e.data
          })
        } //end of getContacts()
    }//end of factory object

})// end of factory
