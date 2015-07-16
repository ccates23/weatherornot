angular.module('starter.weather', [])

.controller('WeatherCtrl', function (weather, $scope, $stateParams, $ionicLoading){
	$scope.city = $stateParams.city;

    $ionicLoading.show({
    	template: 'patience....'
    });


   weather
	.getWeather($stateParams.lat, $stateParams.long)
	.success(function (data){
		$scope.current = data.currently.temperature;
		$ionicLoading.hide();
	});
})

.factory('weather', function (settings, $http) {
	var API_URL = '/api/forecast/';

	return {
		getWeather: function (lat, long) {
			var url = API_URL + lat + ',' + long + '?units';

			if(settings.scale === 'C') {
				url += 'si';
			} else {
				url += 'us';
			}
		  return $http.get(url);
		}
	};
});