// create module for Node's use
(function(exports){
  exports.openWeather = function(city){
  var api = "http://api.openweathermap.org/data/2.5/weather?q=" + city
      , result
      , xhr = new XMLHttpRequest();

  xhr.open('GET', encodeURI(api));
  xhr.onload = function(){
    if (xhr.status === 200){
      result = processWeather(JSON.parse(xhr.responseText));
    }
    else {
      result = 'Request for weather details failed. ' + xhr.status;
    }
  };
    xhr.send();
  };
})(typeof exports === 'undefined' ? this['openWeather'] = {} : exports);
