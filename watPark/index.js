//Require the module 
var uwaterlooApi = require('uwaterloo-api'); 


var uwclient = new uwaterlooApi({
    API_KEY : '12d9b00d5834e88d71af541cbd0222c8'
});

//Use the API 
uwclient.get('/foodservices/menu', function(err, res) {
  console.log(res); 
}); 

uwclient.get('/parking/watpark', function(err, res) {
  console.log(res); 
});