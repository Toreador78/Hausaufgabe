/**
 * Created by oso3rt on 23.12.2016.
 */
(function(){

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 2000,
        values: [75, 300],
        slide: function (event, ui) {
            $("#width").val(ui.values[0] + " - " + ui.values[1]);
        }
    });

    $("#width").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));

    var app = angular.module('enclosure', []);

    app.controller('EnclosureController', ['$scope', function($scope){
        $scope.selectedColor = "0000";

        var colors = {
            "789": "lyellow",
            "1234": "lgreen",
            "5678": "lred"
        };

        //TODO: Funktioniert so noch nicht.. erst lokales Objekt benutzen
        $.getJSON('eec-export.json', function (data) {
            colors = data.colors;
            console.log(data.colors);
            console.log(colors);
        });
        $scope.colorChange = function(){
            console.log($scope.selectedColor);
        };
    }]);

    app.controller('ColorController', function($scope){
        $scope.colors = {
            "789": "lyellow",
            "1234": "lgreen",
            "5678": "lred"
        };

        $scope.selectedColor;

        $scope.coloritemselected = function(color){
            $scope.selectedColor = color;
            alert($scope.selectedColor);
        }
    })

})();


