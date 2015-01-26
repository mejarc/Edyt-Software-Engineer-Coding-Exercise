var processWeather = function(input){
  var output = {};
      output.description = input.weather[0]['description'];
      output.temp = input.main['temp'];
  return output;
}

exports.processWeather = processWeather;
