// create module for Node's use
(function(exports){
  exports.processWeather = function(input){
  var output = {};
      output.description = input.weather[0]['description'];
      output.temp = input.main['temp'];
  return output;
  }
})(typeof exports === 'undefined' ? this['processWeather'] = {} : exports);
