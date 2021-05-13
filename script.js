//xml http request
//create an xml http instance(object)
var request = new XMLHttpRequest();
//initiate a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request to server
request.send()
//if server responds, retrive data
request.onload=function(){
    var data = JSON.parse(this.response);
    for(i in data){
        console.log(data[i].name)
}
    
}
