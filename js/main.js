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
        this.colors = colors;
        //TODO: Funktioniert so noch nicht.. erst lokales Objekt benutzen
        //$.getJSON('eec-export.json', function (data) {
        //    this.colors = data.colors;
        //})
        $scope.colorChange = function(){
            console.log($scope.selectedColor);
        };
    }]);

    var colors = {
        "789": "yellow",
        "1234": "green",
        "5678": "red"
    };
})();