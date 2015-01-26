var openWeather = function(city){
  var api = "http://api.openweathermap.org/data/2.5/weather?q=" + city
      , result
      , xhr = new XMLHttpRequest();

  xhr.open('GET', encodeURI(api));
  xhr.onload = function(){
    if (xhr.status === 200){
      result = JSON.parse(xhr.responseText);
      displayWeather(result);
    }
    else {
      result = 'Request for weather details failed. ' + xhr.status;
    }
  };
  xhr.send();
};

exports.openWeather = openWeather;