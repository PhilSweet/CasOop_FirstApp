angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.text = "Herzlich Willkommen";

  $scope.changeText = function(){
    if($scope.text === "Herzlich Willkommen")
        $scope.text = "Hans Muster";
    else
        $scope.text = "Herzlich Willkommen";

  };

  $scope.nextPage = function(){

  };

})




.controller('PinguinsCtrl', function($scope) {


});
