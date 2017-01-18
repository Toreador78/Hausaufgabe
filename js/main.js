/**
 * Created by oso3rt on 23.12.2016.
 */
(function(){

    var app = angular.module('enclosure', ['rzModule']);

    app.filter('rangeFilter', function(){
        return function(items, scope){
            var filtered = [];
            for (var i = 0; i < items.length; i++){
                var item = items[i];
                if (scope.slider.min <= item.width && item.width <= scope.slider.max){
                    filtered.push(item);
                }
            }
            console.log(filtered.length);
            return filtered;
        };
    });

    app.sevice('GetJSONData', function(){
        this.getJSONData = function(){
            $http.get('eec-export.json')
                .then(function(res){
                    $scope.enclosures = res.data.enclosures;
                });
        }
    });

    app.controller('EnclosureController',function($scope, $http){

        $scope.slider={
            min: 300,
            max: 600,
            options: {
                floor: 0,
                ceil: 2000
            }
        };

        $scope.enclosures = [
            { description: "Enc 100",
                width: 100},
            { description: "Enc 200",
                width: 200},
            { description: "Enc 300",
                width: 300}
        ];
/*
        $http.get('eec-export.json')
            .then(function(res){
                $scope.enclosures = res.data.enclosures;
            });
*/
        $scope.selectedEnclosure;

        $scope.enclosureitemselected = function(enclosure){
            $scope.selectedEnclosure = enclosure;
            console.log($scope.selectedEnclosure.description, $scope.selectedEnclosure);
        }
    });

    app.controller('ColorController', function($scope, $http){

        $http.get('eec-export.json')
            .then(function(res){
                $scope.colors = res.data.colors;
            });

        $scope.selectedColor;

        $scope.coloritemselected = function(color){
            $scope.selectedColor = color;
            console.log($scope.selectedColor);
        }
    });

})();


