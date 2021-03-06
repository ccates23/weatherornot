angular.module('starter.settings', [])

  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    $scope.randomScale = function () {
      $ionicLoading.show({
        duration: 5000
      });
    };

    $scope.$watch('scale', function() {
    settings.setScale($scope.scale);
  });

    $scope.$watch('precision', function() {
    settings.setPrecision($scope.precision);
   });

  })

    .factory('settings', function () {
    return {
      get scale() {
        return localStorage.getItem('scale') || 'K';
      },
      get precision() {
        return localStorage.getItem('precision') || '2';
      },
      set scale(s) {
        localStorage.setItem('scale', s);
      },
      set precision(p) {
        localStorage.setItem('precision', p);
      }
    };
  })
    .factory('locations', function(){
      return{
        data: [{
          city: 'Cupertino, CA',
          lat: '37.3190',
          long: '-122.0293',
        },{
          city: 'Mountain View, CA',
          lat: '37.3897',
          long: '-122.0816',
        },{
          city: 'Redmond, WA',
          lat: '47.6786',
          long: '-122.1310',
        },{
          city: 'Nashville, TN',
          lat: '36.1658',
          long: '-86.7777'
        }]
      }
    });